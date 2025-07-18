'use client';

import { useState } from "react";
import { Dialog } from '@headlessui/react';
import { useMessages } from "./LanguageSwitcher";

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useMessages();

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-accent text-white px-4 py-2 rounded-lg">
                {t.getBooking}
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30 aria-hidden:true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <Dialog.Title className="text-xl font-semibold mb-4 text-gray-800">{t.getBooking}</Dialog.Title>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-800">{t.nameSurname}</label>
                                <input type="text" className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 text-gray-800" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-800">{t.email}</label>
                                <input type="email" className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 text-gray-800" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-800">{t.phone}</label>
                                <input type="tel" className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 text-gray-800" />
                            </div>
                            <div className="flex justify-end space-x-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-lg border text-red-800">
                                    {t.cancel}
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-primary text-white">
                                    {t.send}
                                </button>
                            </div>

                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog >
        </>
    );
}
