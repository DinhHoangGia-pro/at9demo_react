const Home=()=>
{
    var array1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];

        
    var array2=[{id:1,hoten:"Nguyễn Văn A", lop:"k19kma" },
         {id:2,hoten:"Nguyễn Văn Bình", lop:"221521" },
         {id:3,hoten:"Nguyễn Văn Cường", lop:"221521" },
        {id:4,hoten:"Trần Thị D", lop:"221521" }];



    return (

        <div>
            <p>Đây là trang Home</p>
            <p>Danh sách công việc</p>
            {
                array1.map(phantu=>{
                    return (
                        <p>{phantu}</p>
                    );
                })

            }
            <p>Danh sách sinh viên</p>
            <table>
                <tr>
                    <tr><td>ID</td><td>Họ tên</td><td>Lớp</td>  </tr>
                    {
                        array2.map(sv=>{
                            return(
                                <tr><td>{sv.id}</td><td>{sv.hoten}</td><td>{sv.lop}</td>  </tr>   
                            )
                        })
                    }

                </tr>
            </table>
            
            
        </div>
        
    );
}

export default Home;
