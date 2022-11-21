import typescript from 'rollup-plugin-typescript2'


export default {
    input: {
        TestButton: 'src/TestButton.tsx',
        TestDiv: 'src/TestDiv.tsx'
    },
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [typescript()],
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react/jsx-runtime',
        '@emotion/react'
    ]
}
