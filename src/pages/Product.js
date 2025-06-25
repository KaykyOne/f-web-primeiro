import React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
} from 'firebase/firestore';
import styles from './Products.module.css';
import { db } from '../connections/firebase';

export default function Products() {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [brands, setBrands] = useState([]);
    const [editId, setEditId] = useState('');

    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);

    const productsCollection = collection(db, 'products');
    const brandCollection = collection(db, 'brands');

    useEffect(() => {
        const fetchData = async () => {
            const qBrands = query(brandCollection, orderBy('createdAt', 'desc'));
            const qProducts = query(productsCollection, orderBy('name', 'desc'));

            const brandsSnap = await getDocs(qBrands);
            const brandsList = brandsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const productsSnap = await getDocs(qProducts);
            const productsList = productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setBrands(brandsList);
            setProducts(productsList);
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage('');

        if (name.trim() === "") {
            setMessage('Por favor, preencha o nome do produto.');
            setLoading(false);
            return;
        }

        if (brand.trim() === "") {
            setMessage('Por favor, selecione a marca do produto.');
            setLoading(false);
            return;
        }

        try {
            if (editId) {
                const productRef = doc(db, 'products', editId);
                await updateDoc(productRef, {
                    name,
                    brand,
                    price: parseFloat(price),
                    unit,
                });
                setMessage('Produto atualizado com sucesso!');
                setEditId('');
            } else {
                await addDoc(productsCollection, {
                    name,
                    brand,
                    price: parseFloat(price),
                    unit,
                });
                setMessage('Produto cadastrado com sucesso!');
            }

            // Limpa os campos
            setName('');
            setBrand('');
            setPrice('');
            setUnit('');

            // Atualiza lista
            const productsSnap = await getDocs(query(productsCollection, orderBy('name', 'desc')));
            const productsList = productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);

        } catch (error) {
            console.error('Erro ao salvar produto:', error);
            setMessage('Erro ao salvar o produto.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setName(product.name);
        setBrand(product.brand);
        setPrice(product.price);
        setUnit(product.unit);
        setEditId(product.id);
        setMessage('');
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
        if (!confirmDelete) return;

        try {
            const productRef = doc(db, 'products', id);
            await deleteDoc(productRef);

            setMessage('Produto excluído com sucesso!');

            // Atualiza lista
            const productsSnap = await getDocs(query(productsCollection, orderBy('name', 'desc')));
            const productsList = productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);

        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            setMessage('Erro ao excluir o produto.');
        }
    };

    const filteredProducts = products.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    // Função pra pegar o nome da marca pelo id
    const getBrandNameById = (id) => {
        const brandObj = brands.find(b => b.id === id);
        return brandObj ? brandObj.name : 'Marca não encontrada';
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>{editId ? "Edite um produto" : "Cadastre um produto"}</h1>

                <label className={styles.label}>Nome:</label>
                <input
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label className={styles.label}>Marca:</label>
                <select
                    className={styles.select}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                >
                    <option value="">Selecione a marca</option>
                    {brands.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <label className={styles.label}>Preço:</label>
                <input
                    className={styles.input}
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label className={styles.label}>Unidade:</label>
                <input
                    className={styles.input}
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                />

                <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : (editId ? 'Atualizar' : 'Cadastrar')}
                </button>

                {message && <p>{message}</p>}
            </form>

            <input
                type="text"
                placeholder="Buscar produtos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
                style={{ marginTop: '20px', width: '100%', maxWidth: '400px', padding: '8px' }}
            />

            <h3>Produtos Cadastrados:</h3>
            <ul className={styles.list}>
                {filteredProducts.map(product => (
                    <li key={product.id} className={styles.listItem}>
                        <span>
                            <strong>{product.name}</strong> - {getBrandNameById(product.brand)} - R$ {product.price} - {product.unit}
                        </span>
                        <div>
                            <button onClick={() => handleEdit(product)} className={styles.btnEdit}>Editar</button>
                            <button onClick={() => handleDelete(product.id)} className={styles.btnDelete}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
