import { useState,React, useEffect } from "react";
import axios from "axios";


const ListProducts=()=>
    {
        const [lstproduct, SetLstProduct] = useState([]);
        const LayDulieutuBackend =async () => 
            {
                try {
                    const res =await axios.get("https://fakestoreapi.com/products"); // Gửi yêu cầu GET tới API để lấy danh sách sản phẩm.
                    SetLstProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
                } catch (err) {
                    console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
                }

            }  
       
        //Hàm useEffect: Chạy khởi tạo components
        useEffect(()=>
            {
               
                LayDulieutuBackend();


            },[]);// Tham số thứ hai là mảng rỗng, giúp useEffect chỉ chạy một lần khi component được gắn vào DOM.

            
    return (
        <div class="product-list"> {/* Div chứa toàn bộ danh sách sản phẩm */}
        {
            lstproduct.map(phantu => { // Lặp qua từng phần tử trong mảng listproduct và render từng sản phẩm.
                return (
                    <div class="product" key={phantu.id}> {/* Khối chứa thông tin từng sản phẩm */}
                        <a href={"/product/"+phantu.id}>
                            <img src={phantu.image} alt={phantu.title} /> {/* Hiển thị hình ảnh sản phẩm */}
                        </a>
                        <div class="product-info"> {/* Khối chứa thông tin chi tiết của sản phẩm */}
                            <a href={"/product/"+phantu.id} class="product-title">
                                <h2 class="product-title">{phantu.title}</h2> {/* Hiển thị tiêu đề sản phẩm */}
                            </a>
                            <p class="product-price">{phantu.price}</p> {/* Hiển thị giá sản phẩm */}
                            <p class="product-description">{phantu.description}</p> {/* Hiển thị mô tả sản phẩm */}
                        </div>
                    </div>
                );
            })
        }
    </div>
    
);
}

export default ListProducts;