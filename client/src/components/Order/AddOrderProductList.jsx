const AddOrderProductList = ({ products, onAddProduct }) => {
    return (
        <>
            {products.map((product) => (
                <button key={product.id} onClick={(e) => {
                    e.preventDefault()
                    onAddProduct(product)
                }} className="w-full border rounded-lg p-3 mb-3 border-gray-300 flex justify-between items-center hover:bg-gray-100 transition-all">
                    <div className="flex w-1/2">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="ml-3">(Ref: <span className="font-bold text-red-900">{product.reference}</span>)</p>
                    </div>
                    <p className="ml-16 ">En Stock: <span className="font-bold">{product.amount}</span></p>
                </button>
            ))}
        </>
    )
}
export default AddOrderProductList