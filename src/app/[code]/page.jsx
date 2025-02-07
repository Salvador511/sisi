'use client'
import { useRouter } from "next/navigation";
import { useEffect, use } from "react";

const CodePage = () => {
    return (
        <div>
            <main>
                <h1>Code Page</h1>
                <p>This is the code page</p>
                <p style={{ display: 'none' }}>
                01010110 01101100 01110110 01101100 00100000 01100010 00100000 01110100 01111000 01101000 00100000 01100111 01111000 01110101 01110010 00101100 00100000 01110111 01101000 00100000 01111001 01101100 01110110 01101100 01110111 01100100 01110101 01100100 01110001 00101110
                </p>
            </main> 
        </div>
    );
};

const Wrapper = ({ params }) => {
    const router = useRouter();
    const resolvedParams = use(params); 
    useEffect(() => {
        if (resolvedParams.code !== 'code') {
            router.push('https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif');
        }
    }, [resolvedParams.code, router]);

    if (resolvedParams.code !== 'code') return null;

    return <CodePage />;
};

export default Wrapper;
