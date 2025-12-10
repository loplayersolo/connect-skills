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


export function Profile() {
  const router = useRouter();

  // Estados de formulário (front-end)
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  // Foco visual do input
  const [focused, setFocused] = useState<string | null>(null);

  // Estados de UX
  const [loading, setLoading] = useState(false);
  const [erroGlobal, setErroGlobal] = useState("");

  // Critérios simples (apenas para estado do botão — você decide validações reais depois)
  const canSubmit =
    nome.trim().length >= 3 &&
    telefone.length >= 10 &&
    cpf.length === 11 &&
    nascimento.length === 8 &&
    !loading;

  // Placeholders de ações (você integra depois)
  const handlePickAvatar = () => {
    Alert.alert("Alterar foto", "Aqui você conecta o seletor de imagens.");
    // Ex.: setAvatarUri("file:///...") após implementação
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setErroGlobal("");
      // Integração futura aqui (atualizar perfil / storage / etc.)
      // Por enquanto, simulação:
      await new Promise((r) => setTimeout(r, 600));
      Alert.alert("Sucesso", "Perfil atualizado (simulado).");
    } catch (e: any) {
      setErroGlobal(e?.message || "Falha ao salvar.");
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
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.brand}>Connect Skills</Text>
            <Text style={styles.title}>Seu Perfil</Text>
            <Text style={styles.subtitle}>
              Atualize suas informações pessoais.
            </Text>
          </View>

          {/* Card principal */}
          <View style={styles.card}>
            {/* Avatar */}
            <View style={styles.avatarRow}>
              <View style={styles.avatarContainer}>
                {avatarUri ? (
                  <View style={styles.avatarImageContainer}>
                    {/* Você renderiza <Image source={{ uri: avatarUri }} ... /> quando integrar */}
                  </View>
                ) : (
                  <View style={styles.avatarFallback}>
                    <Text style={styles.avatarInitials}>{nome}</Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={handlePickAvatar}
                  style={styles.avatarEdit}
                  accessibilityLabel="Alterar foto do perfil"
                >
                  <Ionicons name="camera" size={18} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={styles.avatarHelp}>
                <Text style={styles.avatarTitle}>Foto do perfil</Text>
                <Text style={styles.avatarHint}>
                  Toque no ícone para selecionar uma imagem.
                </Text>
              </View>
            </View>

            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome completo</Text>
              <View
                style={[
                  styles.inputWithIcon,
                  focused === "nome" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  value={nome}
                  onChangeText={setNome}
                  onFocus={() => setFocused("nome")}
                  onBlur={() => setFocused(null)}
                />
              </View>
            </View>

            {/* Telefone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Telefone</Text>
              <View
                style={[
                  styles.inputWithIcon,
                  focused === "telefone" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="call-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="(11) 99999-0000"
                  placeholderTextColor="#9ca3af"
                  keyboardType="phone-pad"
                  value={telefone}
                  onChangeText={setTelefone}
                  onFocus={() => setFocused("telefone")}
                  onBlur={() => setFocused(null)}
                />
              </View>
            </View>

            {/* CPF */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CPF</Text>
              <View
                style={[
                  styles.inputWithIcon,
                  focused === "cpf" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="id-card-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="000.000.000-00"
                  placeholderTextColor="#9ca3af"
                  keyboardType="number-pad"
                  value={cpf}
                  onChangeText={setCpf}
                  onFocus={() => setFocused("cpf")}
                  onBlur={() => setFocused(null)}
                />
              </View>
            </View>

            {/* Nascimento */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Nascimento</Text>
                <Text style={styles.hint}>Formato: DD/MM/AAAA</Text>
              </View>

              <View
                style={[
                  styles.inputWithIcon,
                  focused === "nascimento" && styles.inputFocused,
                ]}
              >
                <Ionicons
                  name="calendar-outline"
                  size={18}
                  color="#6b7280"
                  style={styles.leftIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="dd/mm/aaaa"
                  placeholderTextColor="#9ca3af"
                  keyboardType="number-pad"
                  value={nascimento}
                  onChangeText={setNascimento}
                  onFocus={() => setFocused("nascimento")}
                  onBlur={() => setFocused(null)}
                />
              </View>
            </View>

            {/* Botão Salvar */}
            <TouchableOpacity
              onPress={handleSave}
              disabled={!canSubmit}
              style={[
                styles.primaryButton,
                !canSubmit && styles.primaryButtonDisabled,
              ]}
              accessibilityLabel="Salvar alterações do perfil"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.primaryButtonText}>Salvar alterações</Text>
              )}
            </TouchableOpacity>

            {/* Erro global */}
            {!!erroGlobal && (
              <Text style={styles.loginError}>{erroGlobal}</Text>
            )}

            {/* Voltar */}
            <TouchableOpacity
              style={styles.backToLogin}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={16} color="#111827" />
              <Text style={styles.backToLoginText}>Voltar</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé */}
          <Text style={styles.footerNote}>
            © {new Date().getFullYear()} Connect Skills
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
