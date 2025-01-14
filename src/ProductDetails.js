import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import RelatedProduct from "./RelatedProduct";

const ProductDetails=()=>
{
    const { id } =useParams();/*Lấy id từ url*/
    const [product, setProduct]=useState({
        "id": 0,
        "title": "",
        "price": 0,
        "description": "",
        "category": "",
        "image": ""
        });

        const LayDulieutuBackend = async () => { // Khởi tạo hàm bất đồng bộ để lấy dữ liệu từ backend.
            try {
                const res = await axios.get('https://fakestoreapi.com/products/'+id);
                setProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
            } catch (err) {
                console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
            }
        };

        useEffect(() => {     
           
           
            LayDulieutuBackend(); // Gọi hàm để lấy dữ liệu từ backend khi component được render lần đầu.
        }, []);

    /*************/
    return (

        <div class="product-detail">

        <a class="edit-button" href={"/editproduct/"+product.id} > Edit Product</a>
        &nbsp;&nbsp;&nbsp;

            <a class="edit-button" href={"/add-product"} > Add Product</a>
            <img src={product.image} alt={product.title}/>
            <h2 class="product-title">{product.title}</h2>
            <p class="product-price">Giá: {product.price}</p>
            <p class="product-description">
                {product.title}
            </p>
            <a href="/" class="back-button">Quay lại Danh sách sản phẩm</a>

            {/* Thêm sản phẩm liên quan */}
           <RelatedProduct category={product.category} currentId={id} />

        </div>
    );
}

export default ProductDetails;