import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from 'react';
import ChatFloating from '../modal/ChatFloating';

export const Views = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Sidebar que puede colapsar */}
            <Sidebar showSidebar={showSidebar} />

            {/* Área de contenido */}
            <div className="flex flex-col overflow-auto h-full w-full">
                {/* Header que controla el sidebar */}
                <Header setShowSidebar={setShowSidebar} />

                {/* Contenido dinámico y el botón de chat flotante */}
                <main className="flex-1 overflow-auto relative bg-gray-100 p-4">
                    <Outlet />
                    <ChatFloating /> 
                </main>
            </div>
        </div>
    );
};

export default Views;
