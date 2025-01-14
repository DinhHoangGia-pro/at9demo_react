import { useState } from "react";
function Home()
    {
        var tenlop="Xin chào k19";

            
        const vieccanlam1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];

        
        var array2=[{id:1,hoten:"Nguyễn Văn A", lop:"221521" },
             {id:2,hoten:"Nguyễn Văn Bình", lop:"221521" },
             {id:3,hoten:"Nguyễn Văn Cường", lop:"221521" },
            {id:4,hoten:"Trần Thị D", lop:"221521" }];
           

        const [arr3, setArr3]=useState([
            {id:1,hoten:"Nguyễn Văn Anh", lop:'221521' },
                {id:2,hoten:'Nguyễn Văn Bình', lop:'221521'},
                {id:3,hoten:'Nguyễn Văn Cường', lop:'221521' },
               {id:4,hoten:'Trần Thị Diệu', lop:'221521' }]
            );
        
        

            const Themsinhvien=()=>
                {
                    console.log("Test them sinh vien");
                    const sinhvienmoi={id:5,hoten:"Cherry Nguyen", lop:"221521" };
                    array2=[...array2, sinhvienmoi];

                    array2.map(x=>{
                      console.log(x.hoten);
                    });
                }

            const Themsinhvien2=()=>
                    {
                        console.log("Test them sinh vien");
                        const sinhvienmoi={id:5,hoten:"Cherry Nguyen", lop:"221521" };
                        const newarr3=[...arr3, sinhvienmoi];
                        setArr3(newarr3);

                    }
    
            const Suasinhvien=id=>
            {
                array2.map(phantu=>{
                    
                    if (phantu.id===id)
                    {
                        console.log("Sua phan tu:"+phantu.id+", ten:"+phantu.hoten);
                        phantu.hoten="Edited "+phantu.hoten;
                        console.log(phantu.hoten);
                    }
                    return phantu;
    
                });
            }

            const Suasinhvien2=id=>
                {
                  const new_arr3=  arr3.map(phantu=>{
                        
                        if (phantu.id===id)
                        {
                            console.log("Sua phan tu:"+phantu.id+", ten:"+phantu.hoten);
                            phantu.hoten="Edited "+phantu.hoten;
                        }
                        return phantu;        
                    });

                    setArr3(new_arr3);                
                }  


            const XoaSV2=id=>{
                const new_arr3=arr3.filter(phantu=>phantu.id!==id);
                setArr3(new_arr3);  

            }
    
        
        
    
        return (
            <div>
                <p><h1>{tenlop}</h1></p>
                {
                    //Vong lap
                    vieccanlam1.map(x=>{
                        return (
                            <p>
                              <span>{x}</span> &nbsp;&nbsp;&nbsp;
                              <input type="checkbox"/>
                            </p>
                            
    
                             
                        );
                    })
                
                 } 


                 <h2>Danh sách sinh viên</h2>
                 {
                    array2.map(phantu=>{
                        return( 
                        <p>
                            <p>
                            <span>ID:</span>
                            <span>&nbsp;{phantu.id}</span>                            
                            <span>&nbsp;&nbsp;,Họ tên:</span>
                            <span>&nbsp;{phantu.hoten}</span>                            
                            <span>&nbsp;&nbsp;, Lớp:</span>
                            <span>&nbsp;{phantu.lop}</span>

                            <span><input value="Sửa sv" type="button" onClick={Suasinhvien.bind(this, phantu.id)}/>  </span>
                            </p>
                            <hr></hr>
                        </p>)
                    }

                    )
                 }

                 <p style={{paddingTop:20}}>
                    <input type="button" value="Thêm sinh viên" onClick={Themsinhvien.bind(this)} style={{backgroundColor:"ThreeDFace", padding:10}}/>
                 </p>

                 <hr></hr>
                 <p><h2>Danh sách sinh viên ở mảng arr3</h2></p>

                 {
                    arr3.map(phantu=>{
                        return (
                                <p>
                                 ID:{phantu.id}   Họ tên: {phantu.hoten}, Lớp:{phantu.lop}

                                 <input type="button" style={{backgroundColor:"greenyellow"}} value="Sửa sv" onClick={Suasinhvien2.bind(this, phantu.id)}/>
                                
                                &nbsp;&nbsp;&nbsp;
                                <input type="button" style={{backgroundColor:"royalblue"}} value="Xóa sv" onClick={XoaSV2.bind(this, phantu.id)}/>
                                </p>

                        );

                    })
                 }

                <p style={{paddingTop:20}}>
                    <input type="button" value="Thêm sinh viên2" onClick={Themsinhvien2.bind(this)} style={{backgroundColor:"greenyellow", padding:10}}/>
                 </p>

                 
    
            </div>
    
        );
    }



    
    
    
    export default Home;