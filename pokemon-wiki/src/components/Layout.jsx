import React from 'react';
import '../styles/layout.css'

export default function Layout({children}) {
    return <div className="grid-layout">{children}</div>
}