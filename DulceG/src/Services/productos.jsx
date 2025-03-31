export async function GetProducts() {
    try {
        const response = await fetch('http://localhost:3003/productosC', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error('Error fetching products');

        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

async function PostProducts() {
    try {
        const userData = {  };

        const response = await fetch("http://localhost:3003/productosC", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateProducts( id) {
    try {
        const userData = { id };

        const response = await fetch(`http://localhost:3003/productosC/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error updating user with id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

async function DeleteProducts(id) {
    try {
        const response = await fetch(`http://localhost:3003/productosC/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}


export default { DeleteProducts, GetProducts, PostProducts, UpdateProducts };