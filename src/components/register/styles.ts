import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 8,
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
    width: "100%",
  },
  inputError: {
    borderColor: "#dc2626",
  },
  fieldError: {
    color: "#dc2626",
    fontSize: 12,
    marginTop: 6,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4b5563",
    textAlign: "right",
    marginTop: 5,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
  },
  loginError: {
    color: "#dc2626",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
  signInButton: {
    backgroundColor: "#111827",
    paddingVertical: 16,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  signInButtonDisabled: {
    backgroundColor: "#d1d5db",
  },
  signInButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#6b7280",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  socialButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 9999,
  },
  signUpText: {
    marginTop: 40,
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  signUpLink: {
    color: "#3b82f6",
    fontWeight: "bold",
  },
});