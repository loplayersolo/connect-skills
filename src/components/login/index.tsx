import { supabase } from "@/lib/supabase";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("aluno@teste.com");
  const [password, setPassword] = useState("123@senac");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const canSubmit = email.trim() !== "" && password.trim() !== "" && !loading;

  const handleSignIn = async () => {
   try {
      setLoading(true);
      setLoginError("");
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setLoginError(error.message || "E-mail ou senha inválidos!");
      }
      // Login com sucesso
      router.replace("./(tabs)"); {/* aqui estava: router.replace(./(tabs)");*/ }
    } catch (e: any) {
      setLoginError(e.message || "Não foi possível logar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>Acesse sua conta</Text>
            <Text style={styles.subtitle}>Connect Skills — Aprenda e ensine.</Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Senha */}
            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Senha</Text>
              </View>

              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => Alert.alert("Recuperar senha", "Fluxo de reset a implementar.")}
              >
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            {/* Botão de login */}
            <TouchableOpacity
              onPress={handleSignIn}
              disabled={!canSubmit}
              style={[styles.signInButton, !canSubmit && styles.signInButtonDisabled]}
              accessibilityLabel="Entrar no aplicativo"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            {/* Erro de login */}
            {!!loginError && <Text style={styles.loginError}>{loginError}</Text>}

            {/* Ações secundárias (opcional) */}
            <TouchableOpacity onPress={() => router.push("./(auth)/register")}>
              <Text style={styles.signUpText}>
                Não possui uma conta? <Text style={styles.signUpLink}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}