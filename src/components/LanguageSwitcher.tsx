'use client';

import {
    useState,
    useEffect,
    createContext,
    useContext,
    ReactNode,
} from 'react';

type Lang = 'tr' | 'en';
type Messages = Record<string, string>;

interface LangContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    messages: Messages;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('tr');
    const [messages, setMessages] = useState<Messages>({});

    // Whenever the language changes, load the JSON file
    useEffect(() => {
        async function loadMessages() {
            const res = await fetch(`/locales/${lang}/common.json`);
            if (!res.ok) {
                console.error('Failed to load locale:', lang);
                return;
            }
            const data: Messages = await res.json();
            setMessages(data);
        }
        loadMessages();
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang, messages }}>
            {children}
        </LangContext.Provider>
    );
}

function useLangContext() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error('useLangContext must be used inside LangProvider');
    return ctx;
}

export function useMessages() {
    const { messages } = useLangContext();
    return messages;
}

export function LanguageSwitcher() {
    const { lang, setLang } = useLangContext();

    return (
        <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="bg-gray-100 border border-gray-300 rounded p-1 text-sm text-gray-800"
        >
            <option value="tr" className=''>TR</option>
            <option value="en">EN</option>
        </select>
    );
}