"use client"
import React, { useRef } from 'react'
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import styles from "./../Navbar/navbar.module.css"


export default function NavbarSearchBox() {
    const searchRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search events..."
                className={styles.searchInput}
                ref={searchRef}
            />
            <IoSearchOutline className={styles.searchIcon} />
            {searchRef.current?.value === null && (
                <IoCloseOutline
                    className={styles.clearIcon}
                    onClick={() => {
                        searchRef.current?.value === "";
                    }}
                />
            )}
        </div>
    )
}
