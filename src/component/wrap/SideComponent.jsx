import { useState } from 'react';
import NavComponent from "./side/NavComponent";
import Panel1Component from "./side/Panel1Component";

export default function SideComponent() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return(
        <section id="sidePanel">
            <NavComponent />
            <Panel1Component
                isOpen={isOpen}
                onToggle={handleToggle}
            />
        </section>
    )
}