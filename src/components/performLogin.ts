export async function performLogin(email: string, password: string) {
    const controller = new AbortController();
    const { signal } = controller;

    const validate = () => {
        if (!email) {
            console.log('Please enter your email.');
            return { success: false, message: 'Please enter your email.' };
        } else if (!password) {
            console.log('Please enter your password.');
            return { success: false, message: 'Please enter your password.' };
        }
        return null;
    };

    const validationResult = validate();
    if (validationResult) {
        return validationResult;
    }

    try {
        const response = await fetch('http://localhost:3333/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal,
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Erro ao realizar login:', errorData);
            return { success: false, message: 'Erro ao realizar login.' };
        }

        const users = await response.json();
        const userCredentials = users.map((user: { email: string; password: string }) => ({
            email: user.email,
            password: user.password
        }));

        const userExists = userCredentials.some(user => user.email === email && user.password === password);

        if (userExists) {
            console.log('Login realizado com sucesso.');
            return { success: true, message: 'Login realizado com sucesso.' };
        } else {
            console.error('Usuário não encontrado ou credenciais incorretas.');
            return { success: false, message: 'Usuário não encontrado ou credenciais incorretas.' };
        }

    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Requisição abortada devido a validação.');
            return { success: false, message: 'Requisição abortada.' };
        }
        console.error('Erro ao realizar login:', error);
        return { success: false, message: 'Erro ao realizar login. Tente novamente mais tarde.' };
    }
}
