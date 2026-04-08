const formatPrice = (price) => 
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(price);

export default function ProductList({ products }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                products.map((p) => (
                    <div key ={p.id}>
                        <h3>{p.name}</h3>
                        <p>{formatPrice(p.price)}</p>
                    </div>
                ))
            )}
        </section>
    );
}