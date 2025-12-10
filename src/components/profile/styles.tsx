import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const isSmall = width < 360;

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  keyboardAvoiding: { flex: 1 },

  container: {
    flexGrow: 1,
    paddingHorizontal: Math.max(16, width * 0.07),
    paddingTop: 16,
    paddingBottom: width * 0.18,
    backgroundColor: "#ffffff",
  },

  // Header
  header: { alignItems: "center", marginVertical: width * 0.08 },
  brand: {
    fontSize: 13,
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase" as const,
  },
  title: {
    fontSize: isSmall ? 24 : 28,
    fontWeight: "800",
    color: "#111827",
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
    textAlign: "center",
  },

  // Card/container
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },

  form: { width: "100%" },
  inputGroup: { marginBottom: 16 },

  label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 8 },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  hint: { fontSize: 12, color: "#9ca3af" },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: "#111827",
    backgroundColor: "#f7fafc",
  },
  leftIcon: { marginLeft: 12 },

  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: isSmall ? 12 : 14,
    fontSize: 16,
    color: "#111827",
  },
  eyeIcon: { position: "absolute", right: 12 },

  inputError: { borderColor: "#dc2626" },
  fieldError: { color: "#dc2626", fontSize: 12, marginTop: 6 },

  // Avatar
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 78,
    height: 78,
    borderRadius: 999,
    backgroundColor: "#eef2ff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  avatarImageContainer: {
    width: 78,
    height: 78,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "#e5e7eb",
  },
  avatarFallback: {
    width: 78,
    height: 78,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e7eb",
  },
  avatarInitials: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },
  avatarEdit: {
    position: "absolute",
    right: -2,
    bottom: -2,
    backgroundColor: "#111827",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatarHelp: { flex: 1 },
  avatarTitle: { fontSize: 14, fontWeight: "700", color: "#111827" },
  avatarHint: { fontSize: 12, color: "#6b7280", marginTop: 2 },

  // Botões
  primaryButton: {
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  primaryButtonDisabled: { backgroundColor: "#d1d5db" },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  loginError: {
    color: "#dc2626",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },

  backToLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 18,
  },
  backToLoginText: { color: "#111827", fontSize: 14, fontWeight: "600" },

  footerNote: {
    textAlign: "center",
    marginTop: 18,
    color: "#9ca3af",
    fontSize: 12,
  },
});
