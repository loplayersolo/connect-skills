/* Configuração do react native com o objetivo de que os dados de login
persistam mesmo após fechar o app => persistência da sessão no AsyncStorage */
import { SUPA_KEY, SUPA_URL } from "@/constants/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const localStorage = {
    getItem: async (key: string) => await AsyncStorage.getItem(key),
    setItem: async (key: string, value: string) => await AsyncStorage.setItem(key, value),
    removeItem: async (key: string) => await AsyncStorage.removeItem(key),
};

export const supabase = createClient(SUPA_URL, SUPA_KEY, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});