{loaduser? <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2> : users.map(el=> 
    <div style={{width:449,height:288}}className="container mt-5 d-flex justify-content-center">
<div className="card p-3">
<div className="d-flex align-items-center">
<div className="image"> <img src={el.imageUrl} className="rounded" width={100} /> </div>
<div className="ml-3 w-100">
<h5 className="mb-0 mt-0">{el.name} {el.lastName}</h5> <span>{el.email}</span>
<div style={{width:141,marginRight:10}}className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
 
  <div className="d-flex flex-column" style={{width:196}}>  <span className="number2">{el.phone}</span> </div>
 
</div>
<button onClick={()=>dispatch(deleteOneUser(el._id))} style={{height:30,marginTop:20}}><svg style={{marginTop:-18}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button> 
</div>
</div>
</div>
</div>)}