import React from 'react'

export default async function AboutSlugPage({ params }) {
    const p = await params;
    console.log(p)
    return (
        <div>
            AboutSlugPage
        </div>
    )
}
