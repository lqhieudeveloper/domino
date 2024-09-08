const parseEnv = (envVariable: string | boolean | number) => {
    try {
        return JSON.parse(envVariable as string)
    } catch (e) {
        return envVariable
    }
}

const configEnv = {
    APP_URL: process.env.BASE_PORT || ''
} as const

export default Object.fromEntries(
    Object.entries(configEnv).map(([key, value]) => {
        return [key, parseEnv(value)]
    })
) as typeof configEnv
