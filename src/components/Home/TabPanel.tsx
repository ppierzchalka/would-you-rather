
import React from 'react';

export type TabPanelProps = {
    value: number;
    index: number;
}

export const TabPanel: React.FC<TabPanelProps> = ({
    children,
    value,
    index
}
) => {
    return (
        index === value ? (
            <div className="tabs-panel__content">
                {children}
            </div>
        ) : null)
};
