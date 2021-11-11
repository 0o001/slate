import * as React from "react";
import * as System from "~/components/system";
import * as SVG from "~/common/svg";
import * as Actions from "~/common/actions";
import * as Validations from "~/common/validations";
import * as Events from "~/common/custom-events";
import * as Strings from "~/common/strings";
import * as Styles from "~/common/styles";

import { css } from "@emotion/react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useForm, useField } from "~/common/hooks";
import Field from "~/components/core/Field";
import { Toggle, SignUpPopover } from "~/components/core/Auth/components";

const STYLES_INITIAL_CONTAINER = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const STYLES_LINK_ITEM = (theme) => css`
  display: block;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  font-family: ${theme.font.medium};
  user-select: none;
  cursor: pointer;
  margin-top: 2px;
  color: ${theme.system.black};
  transition: 200ms ease all;
  word-wrap: break-word;

  :visited {
    color: ${theme.system.black};
  }

  :hover {
    color: ${theme.system.blue};
  }
`;

// NOTE(amine): used to remove content jumping
// when switching between signin/signup in mobile
const STYLES_SPACER = (theme) => css`
  height: 20px;
  @media (max-width: ${theme.sizes.mobile}px) {
    height: 10vh;
  }
`;

const useToggler = ({ params }) => {
  const TOGGLE_OPTIONS = [
    { value: "signin", label: "Sign in" },
    { value: "signup", label: "Sign up" },
  ];
  const [state, setState] = React.useState(params?.tab || "signin");
  const handleToggleChange = (value) => setState(value);
  return { toggleValue: state, handleToggleChange, TOGGLE_OPTIONS };
};

export default function Initial({
  isSigninViaTwitter,
  goToSigninScene,
  onTwitterSignin,
  goToSignupScene,
  createVerification,
  initialEmail,
  page,
}) {
  const { TOGGLE_OPTIONS, toggleValue, handleToggleChange } = useToggler(page);

  // NOTE(amine): Signup view form
  const {
    getFieldProps,
    getFormProps,
    isSubmitting: isCheckingEmail,
  } = useForm({
    validateOnBlur: false,
    initialValues: { email: initialEmail || "" },
    validate: ({ email }, errors) => {
      if (Strings.isEmpty(email)) {
        errors.email = "Please provide an email";
      } else if (!Validations.email(email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async ({ email }) => {
      const response = await Actions.checkEmail({ email });
      if (response?.data?.twitter) {
        Events.dispatchMessage({
          message: "This email is associated with a Twitter account, please log in with Twitter",
        });
        return;
      }
      if (response?.data?.email) {
        goToSigninScene({
          emailOrUsername: email,
          message: `There is already an account associated with ${email}`,
        });
        return;
      }

      const verificationResponse = await createVerification({ email });
      if (!verificationResponse) return;
      goToSignupScene({ email });
    },
  });

  // NOTE(amine): Signin view form
  const { getFieldProps: getSigninFieldProps } = useField({
    validateOnBlur: false,
    onSubmit: async (emailOrUsername) => goToSigninScene({ emailOrUsername }),
    validate: (emailOrUsername) => {
      if (Strings.isEmpty(emailOrUsername)) return "Please enter a username or email";
      if (!Validations.username(emailOrUsername) && !Validations.email(emailOrUsername))
        return "Invalid email/username";
    },
    initialValue: "",
  });

  return (
    <SignUpPopover
      title={<>Discover, experience, share files on Slate</>}
      style={{ paddingBottom: 24 }}
    >
      <div css={STYLES_INITIAL_CONTAINER}>
        <div css={STYLES_SPACER} />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <System.ButtonPrimary
            full
            style={{ backgroundColor: "rgb(29,161,242)" }}
            onClick={onTwitterSignin}
            loading={isSigninViaTwitter}
          >
            Continue with Twitter
          </System.ButtonPrimary>
          <System.Divider
            color="#AEAEB2"
            width="45px"
            height="0.5px"
            style={{ margin: "0px auto", marginTop: "20px" }}
          />
          <Toggle
            toggleValue={toggleValue}
            options={TOGGLE_OPTIONS}
            style={{ margin: "20px auto 0px" }}
            onChange={handleToggleChange}
          />
        </div>
        {toggleValue === "signin" ? (
          <>
            <Field
              autoFocus
              label="Email address or username"
              placeholder="Email/username"
              icon={SVG.RightArrow}
              name="email/username"
              type="text"
              full
              {...getSigninFieldProps()}
              // NOTE(amine): the input component internally is using 16px margin top
              containerStyle={{ marginTop: "4px" }}
            />

            <div style={{ marginTop: "auto" }}>
              <a css={STYLES_LINK_ITEM} href="/terms" target="_blank">
                <div css={Styles.HORIZONTAL_CONTAINER_CENTERED}>
                  <SVG.RightArrow height="16px" style={{ marginRight: 4 }} /> Terms of service
                </div>
              </a>

              <a css={STYLES_LINK_ITEM} style={{ marginTop: 4 }} href="/guidelines" target="_blank">
                <div css={Styles.HORIZONTAL_CONTAINER_CENTERED}>
                  <SVG.RightArrow height="16px" style={{ marginRight: 4 }} /> Community guidelines
                </div>
              </a>
            </div>
          </>
        ) : (
          <AnimateSharedLayout>
            <form {...getFormProps()}>
              <Field
                autoFocus
                label="Sign up with email"
                placeholder="Email"
                type="email"
                name="email"
                full
                style={{ backgroundColor: "rgba(242,242,247,0.5)" }}
                // NOTE(amine): the input component internally is using 16px margin top
                containerStyle={{ marginTop: "4px" }}
                {...getFieldProps("email")}
              />

              <motion.div layout>
                <System.ButtonPrimary
                  full
                  type="submit"
                  style={{ marginTop: "16px" }}
                  loading={isCheckingEmail}
                >
                  Send verification link
                </System.ButtonPrimary>
              </motion.div>
            </form>
            <div style={{ marginTop: "auto" }}>
              <a css={STYLES_LINK_ITEM} href="/terms" target="_blank">
                <div css={Styles.HORIZONTAL_CONTAINER_CENTERED}>
                  <SVG.RightArrow height="16px" style={{ marginRight: 4 }} /> Terms of service
                </div>
              </a>

              <a css={STYLES_LINK_ITEM} style={{ marginTop: 4 }} href="/guidelines" target="_blank">
                <div css={Styles.HORIZONTAL_CONTAINER_CENTERED}>
                  <SVG.RightArrow height="16px" style={{ marginRight: 4 }} /> Community guidelines
                </div>
              </a>
            </div>
          </AnimateSharedLayout>
        )}
      </div>
    </SignUpPopover>
  );
}
