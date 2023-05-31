import React,{useState, useEffect,useMemo,Component} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router'
//import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';  // DatePicker 라는 컴포넌트도 가져오깅
import "react-datepicker/dist/react-datepicker.css"; 
import {Divider ,Dropdown}  from 'semantic-ui-react';
import $ from 'jquery';
import { BsQuestionLg } from 'react-icons/bs';
import * as Loader from "react-loader-spinner";

import {InputGroup, Container,Col,Row,Image,Modal,Button,Form,Card,Table,DropdownButton,FormControl} from 'react-bootstrap';
import { tree } from 'd3';
import { string } from 'prop-types';
import Select from 'react-select'

import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from "react-bs-datatable";

//import AddData from "./AddData";

function Scaffold3(props){
  const history = useNavigate()
  const [loading, setLoading] = useState(null)

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
//    const [show4, setShow4] = useState(false);
    const [getshow, setShow_project] = useState(false);
    const [whole, setwhole] = useState([]);
    const [TodoList, setTodoList] = useState(false);
    const [getoption,setoption]=useState(false)
    const [getRefresh,setRefrash]=useState(false)
    const [getRefresh2,setRefrash2]=useState(false)

    const [getexp,setexpwhole]=useState([])
    const [testformdata,settestformdata]=useState(false)
    const [numexp,setnumexp]=useState(false)
    const [placeholder,setplaceholder]=useState('Selectproject')
    const [TodoList2, setTodoList2] = useState(false);
    const [Progress,setProgress]= useState(false);
    const [getstate,setgetstate]= useState({});
    const [formid,setformid]= useState("EXPID");
    const [formlabel,setformlabel]= useState("LABLEID");
    const [formfilter,setformfilter]= useState("FILTERID");
    const [formfle,setformfile]= useState("FILEID");
    const [formtxtarea,setformtxtarea]= useState("TXT");


    const changeoption = (e) =>{
      //setExperimentName
      //setLabelinfomation(e[1])
    //  setFilterrow(e[2])
      //setExperimentDescription(e[3])
      //setFile
    
    //  setProgress(false) 
    }

    //PROGRESS setgetstate
    const handleSubmitdrop= (event) =>{
      
          setplaceholder(event.target.innerText)
          }

          const STORY_HEADERS = [
            {
              prop: "id",
              title: "id",
              isSortable: true,
              
            },
            {
              prop: "Project Name",
              title: "Project Name",
              isFilterable: true
            },
            {
              prop: "ExperimentName",
              title: "Experiment Name",
              isFilterable: true
            },{
              prop: "date",
              title: "date",
              isSortable: true,
        
            },
            {
              prop: "User",
              title: "User",
              isFilterable: true
            },
            {
              prop: "Label(TMT/LFQ)",
              title: "Label(TMT/LFQ)"
            },
            
            {
              prop: "Filter",
              title: "Filter"
            },{
              prop: "Analysis",
              title: "Analysis",
              cell: row => (
                

               /*<a href={row.Analysis} target="_blank">
               
                
        
        





                </a><Button variant="link" style={{textAlign:"left"}} onClick={(e)=> props.getEXPID(row.ExperimentName)}>{row.Analysis}</Button>
               x==4?115:b==3? 123:11
.length
               
                */ 
//props.ProjectID[0]

               row.Analysis=='select'?
                (<Button variant="link" style={{textAlign:"left"}}  onClick={(e)=> props.getEXPID([row.ExperimentName,[props.ProjectID[0]]])}>{row.Analysis}</Button>)
                :    (<text style={{textAlign:"left"}} >{row.Analysis}</text>)
               
              )
           
            }
            
          ];
     
  
    //alert? login,권한 없으면? 권한요청해라. login해라로 가야함.

/*
setShow_project(false),
setRefrash(false))
*/
   
    useMemo(() => {
      props.user != false
      
      ?(
          fetch('http://127.0.0.1:5506/api/projectlist/')
          .then((res)=>res.json())
          .then((posts)=>{
            const explistfiluser=posts.filter(id=>id.username==props.user)
            const projlistfiluser= posts.map( (a,i)=>({
              value: i, text: a.projectname ,startdate:a.startdate,enddate:a.enddate,description:a.description
      ,username:a.username,userlist:a.userlist
            }))

            const filterproj= props.ProjectID!=false? projlistfiluser.filter(id=>id.text==props.ProjectID[0]).filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1):projlistfiluser.filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1)
            
            const proj_list= explistfiluser.map( (a,i)=>({
              value: i, text: a.projectname

            }))
            setTodoList2(proj_list)
            setwhole(explistfiluser)
              setTodoList(filterproj)
              setRefrash(true)  
          })
           

          
          )
      :setTodoList(false)
      setwhole(false)
    
      setRefrash(true)  
    }, [getRefresh])
    useMemo(() => {
      props.user != false
      ?(
      
        fetch('http://127.0.0.1:5506/api/uplist/')
        .then((res)=>res.json())
        .then((posts)=>{
//.filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1)
          const explistfiluser=posts//.results
          const tosexp= props.ProjectID!=false?  explistfiluser.filter(id=>id.projecttitle==props.ProjectID[0]).filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1):explistfiluser.filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1)
          
          const tosTable= tosexp.map((a,i)=>{
            
            
            const url= `http://127.0.0.1:5506/api/${'progress_'+a.taskId}/`
            const taskfin=  a.taskfin!='fin'?      updateProgress(a.description,a.projecttitle,url) : 'fin'
      
             const falseck=Object.keys(getstate).length!=0 

             const taskid=  taskfin=='fin'? 'select' : 'data processing'
            
            // const taskid=  taskfin=='fin'? 'select' : getstate[url] == 'PENDING'? 'pass': 'data preprocessing'
             
//       const taskid=  (url!=false && getstate[url]=='SUCCESS')||( url!=false && getstate[url]== 'PENDING' )? 'select' :(url!=false &&  getstate[url]== 'PROGRESS') ?  'data processing': 'Wait'
           // const taskid= getstate[url]=='SUCCESS' || getstate[url]== 'PENDING'?'select' :'data processing' PROGRESS

            //const taskid=a.taskId=='select'? 'select':'data processing'

            return      {"id":(i+1),"projecttitle":a.projecttitle,'description':a.description,"date": a.created_at,'username':a.username,'LabelMethod':a.LabelMethod,'FilterMethod':a.FilterMethod,'Analysis':taskid}
                })
                const tosTable2= tosTable!=false?      tosTable.filter(id=> id.Analysis[0]!='pass')               :[]
                
                tosTable2.sort((a, b) => parseFloat(b.date.split('-').join('').split('T').join('').split(':').join('').split('.')[0]) - parseFloat(a.date.split('-').join('').split('T').join('').split(':').join('').split('.')[0]))
                //a.created_at
                

                const tosTable3= tosTable2.map((a,i)=>{

                  return      {"id":(i+1),"Project Name":a.projecttitle,'ExperimentName':a.description,"date": a.date,'User':a.username,'Label(TMT/LFQ)':a.LabelMethod,'Filter':a.FilterMethod,'Analysis':a.Analysis}
                })
            

            //a.projecttitle,a.description
                setexpwhole(tosTable3)
             setnumexp(tosexp)
                
         setRefrash(true) 
        })
      
      
      
              )
          :setexpwhole([])
          setRefrash(true) 
      
    }, [getRefresh])


    useEffect(()=>{
      if(props.ProjectID==false)
      {
        if(window.confirm("you must select Project"))
         { history('/Onestep') }
        else{
          history('/Onestep')

        }
      }
      
      props.user != false
      
      ?(
          fetch('http://127.0.0.1:5506/api/projectlist/')
          .then((res)=>res.json())
          .then((posts)=>{
            const explistfiluser=posts.filter(id=>id.username==props.user)
            const projlistfiluser= posts.map( (a,i)=>({
              value: i, text: a.projectname ,startdate:a.startdate,enddate:a.enddate,description:a.description
      ,username:a.username,userlist:a.userlist
            }))
            const filterproj= props.ProjectID!=false? projlistfiluser.filter(id=>id.text==props.ProjectID[0]).filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1):projlistfiluser.filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1)
          
            setwhole(explistfiluser)
              setTodoList(filterproj)
              const proj_list=  props.ProjectID!=false? explistfiluser.filter(id=>id.projectname==props.ProjectID[0]).map( (a,i)=>({
                value: i, text: a.projectname
  
              })):   explistfiluser.map( (a,i)=>({
                value: i, text: a.projectname
  
              }))
              setTodoList2(proj_list)
              
              props.ProjectID!=false? 
          
              setShow_project(props.ProjectID[2][0])
              :setShow_project(false)
              props.ProjectID!=false? 
    
              setoption(props.ProjectID[2][1])
              :setoption(false)
          })

         
   
          
          )
      :setTodoList(false)
      setwhole(false)
    
  },[props.user])

  
  useEffect(()=>{
    props.user != false
    
    ?(
      
  fetch('http://127.0.0.1:5506/api/uplist/')
  .then((res)=>res.json())
  .then((posts)=>{
    const explistfiluser=posts//.results
    const tosexp= props.ProjectID!=false?  explistfiluser.filter(id=>id.projecttitle==props.ProjectID[0]).filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1):explistfiluser.filter(id=>([id.username+','+id.userlist]).join().split(',').indexOf(props.user)!=-1)
    
    const tosTable= tosexp.map((a,i)=>{
     
      const url= `http://127.0.0.1:5506/api/${'progress_'+a.taskId}/`
     const taskfin= a.taskfin!='fin'?      updateProgress(a.description,a.projecttitle,url) : 'fin'

     const taskid=  taskfin=='fin'? 'select' :  'data processing'
    //const taskid=  taskfin=='fin'? 'select' : getstate[url] == 'PENDING'? 'pass': 'data preprocessing'

       
       //(url!=false && getstate[url]=='SUCCESS')||( url!=false && getstate[url]== 'PENDING' )? 'select' :(url!=false &&  getstate[url]== 'PROGRESS') ?  'data processing': 'Wait'
      // const taskid= getstate[url]=='SUCCESS' ? 'select' : getstate[url]== 'PENDING'?  'Wait':'data processing'

//      const taskid=a.taskId=='select'? 'select':'data processing'
return      {"id":(i+1),"projecttitle":a.projecttitle,'description':a.description,"date": a.created_at,'username':a.username,'LabelMethod':a.LabelMethod,'FilterMethod':a.FilterMethod,'Analysis':taskid}
    })
    const tosTable2= tosTable!=false?      tosTable.filter(id=> id.Analysis[0]!='pass')               :[]
    
    tosTable2.sort((a, b) => parseFloat(b.date.split('-').join('').split('T').join('').split(':').join('').split('.')[0]) - parseFloat(a.date.split('-').join('').split('T').join('').split(':').join('').split('.')[0]))
                //a.created_at
                

                const tosTable3= tosTable2.map((a,i)=>{

                  return      {"id":(i+1),"Project Name":a.projecttitle,'ExperimentName':a.description,"date": a.date,'User':a.username,'Label(TMT/LFQ)':a.LabelMethod,'Filter':a.FilterMethod,'Analysis':a.Analysis}
                })
    
    
    
    setexpwhole(tosTable3)



   setnumexp(tosexp)
  })



        )
    :setexpwhole([])
 
},[props.user])


/*
setformid("EXPID")
setformid("LABLEID")
setformfilter("FILTERID")
setformfile("FILEID");
setformtxtarea("TXT")*/
//formid
//formlabel
//formfilter
//formfle
          //formtxtarea

  useEffect(()=>{
    
    if( document.querySelector("#ExpID")!=null){
       document.querySelector("#ExpID").value=formid
    }
    if( document.querySelector("#textID")!=null){
       document.querySelector("#textID").value=formtxtarea
    }
    if( document.querySelector("#formFileLg")!=null){
      document.querySelector("#formFileLg").files=formfle
   }
$('input[value='+formlabel+']').prop("checked", true)
$('input[value='+formfilter+']').prop("checked", true)
        },[show2])
     
      

useEffect(()=>{
    
   
  if( document.querySelector("#ExpID")!=null){
    document.querySelector("#ExpID").value=formid
 }
 if( document.querySelector("#textID")!=null){
    document.querySelector("#textID").value=formtxtarea
 }
 if( document.querySelector("#formFileLg")!=null){
   document.querySelector("#formFileLg").files=formfle
}
$('input[value='+formlabel+']').prop("checked", true)
$('input[value='+formfilter+']').prop("checked", true)

      },[show3])











function updateProgress (ExperimentName,projecttitle,progressUrl) {
  fetch(progressUrl).then(function(response) {
    
if(response.status==500&&response.redirected==false){
  
  if (window.confirm('An error occurred in ExperimentName . Delete the experiment.'))
  {
    
   
  
  
    const form_data = new FormData();
form_data.append('Expname',ExperimentName);
form_data.append('taskid',progressUrl)
form_data.append('projecttitle',projecttitle)

fetch("http://127.0.0.1:5506/api/rmexp/", {
    method : 'POST',
    headers: {
        Authorization : `JWT ${localStorage.getItem('token')}`,
    },
    body : form_data
})
.then((res) => {
  if (!res.ok) {
    throw Error("400/500 error");
    
  }
  return res.json();

})
.then(response => {
  
  

  setTimeout(function() {
    
    setRefrash(false)
   }, 2500); 

})

    
    
  }
  else
  {
    setRefrash(false) 
  }






}
else{


  response.json().then(function(data) {

    const getobj=getstate
    
    

    //        setgetstate()
      // update the appropriate UI components
      //setProgress([data.state, data.details]);
     
     
    
      
      
      if(data=='process'){ 
//        console.log(progressUrl)
        setTimeout(updateProgress, 1000,ExperimentName,projecttitle, progressUrl);
       
      }
      else if (data=='fin'){
//        console.log(progressUrl)
        setRefrash(false)
        }
      
else{ 
setRefrash(false)


}
      //
      
      setgetstate(getobj)

    });






  
}




  });
  }
 
  



  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setendDate]=useState(new Date());
  const uploadModule =async (e) =>{
    e.preventDefault();



    const tablelist=numexp
    const value=tablelist.map((a,i)=>{
     
      
      return     [a.description]}  )
const projtf=value.filter(id=>id[0]==e.target[1].value).length>0
if(projtf==true){
  if (window.confirm('This name is already in use. please use a different name'))
  {
    
   




    
    
  }
  else
  {
   
  }



}
else
{

 


  var LabelVar = $('input[name=group1]:checked').val();

  var FilterVar = $('input[name=group2]:checked').val();
  const FilterVar_pass = FilterVar=='NAomit'? 'NA.omit':FilterVar
  var projectnameVar2 = props.ProjectID[0]
  const upload_file=e.target[9].files[0]
  const destxt= e.target[10].value==null? '':e.target[10].value
  const desc=e.target[1].value

   if(desc==null){
    window.alert("You must write experiment name");

   }
   else if(LabelVar==undefined){
    window.alert("You must select Label option");


   }
   else if(FilterVar==undefined){
    window.alert("You must select Filter option");

   }
   else if(upload_file==null){
    window.alert("You must add files");

   }
else{

  const    name2=e.target[9].files[0].name
  const filename = name2.replaceAll(" ", "_").replaceAll("(","").replaceAll(")","")

 
  setLoading(true);
  const formData = new FormData();
  formData.append("description",desc);
  formData.append("files",upload_file);
  formData.append("filename",filename);
  formData.append("destxt",destxt);
  formData.append("username",props.user)
  formData.append("projecttitle",projectnameVar2);
  formData.append("LabelMethod",LabelVar);
  formData.append("FilterMethod",FilterVar_pass);
  formData.append("userlist",props.ProjectID[1]); 
  formData.append("Change2p",'Private')
  formData.append("enctype","multipart/form-data")

  fetch("http://127.0.0.1:5506/api/uplist/", { 
   method : 'POST',
   headers: {
       Authorization : `JWT ${localStorage.getItem('token')}`,
     
   },
   body : formData
}).then(res => {
if (!res.ok) {
  throw Error("400/500 error");
  
}
return res.json();

})
.then((response) =>  

{  
  
  
  setRefrash(false)
  setLoading(false);
  setShow_project(false)
  setoption(false)

  

 // updateProgress(`http://127.0.0.1:5506/api/${response[0]}/`)

}

/*
{

if (window.confirm('Successful joining! Go to Analysis or Add Researchers'))
{
  

  setShow_project(false) 
  setRefrash(false);
  
  
}
else
{   
setShow_project(false) 
  setRefrash(false)

}

}
*/

// 
)
.catch(error => {
if (window.confirm('The server is very busy. sorry'))
{
  
  history('/')




  
  
}
else
{
  history('/')
}

})

}

 





}


    

 

 

}
//<Card.Link href="#">Card Link</Card.Link>
//<Card.Link href="#">Another Link</Card.Link>
//href="/Twostep"

/*
<Row>

{TodoList!=false && getexp!=false &&numexp!=false? 
TodoList.map((a,i)=>{
//value: i, text: a.projectname ,startdate:a.startdate,enddate:a.enddate,description:a.description,username:a.username
return(<>
<Col>
<Card border="dark" style={{ width: '16rem',padding:'1rem',margin:'1rem' }}>
{props.ProjectID[0] !=false ? <Card.Header style={{"font-size": "15px" }} >  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg> {a.text}  </Card.Header>
: <Card.Header style={{"font-size": "15px" }} > {a.text} </Card.Header> }
<Card.Body>
<Card.Subtitle>{a.startdate } ~ {a.enddate}</Card.Subtitle>
<Card.Text>
  {a.username}

 
</Card.Text>



<Card.Text>
  {'Number of Experiments' + '  ' + String( numexp.filter(id=>id.projecttitle==a.text).length)   } 
</Card.Text>

  




</Card.Body>


<Card.Body>
<Card.Text>
  {a.description}
</Card.Text>

</Card.Body>
 </Card>
 </Col>
 <br/>
 </>)
})

:<>
<Card border="dark" style={{ width: '18rem' }}> 
<Card.Header style={{"font-size": "15px" }} >{props.ProjectID[0]!=false? props.ProjectID[0]:'Project에서 선택해주세요'}</Card.Header>
</Card>
<br/> </>
}



</Row>

*/
const CardExampleHeaderCard = () => {
  return(
    <Container>

  {TodoList!=false  ?TodoList.map((a,i)=>{
    return(
    <>
    <Row>
<br/>

    </Row>
<Row>
    <Col xs={4}
       sm={4}
       lg={4} className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Project Name</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"> <text style={{'font-weight':'bold'}}>{a.text}</text></Col>
</Row>
<Row>
    <Col xs={4}
       sm={4}
       lg={4}  className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Researcher</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"> <text style={{'font-weight':'bold'}}>{a.username}</text></Col>

</Row>




<Row>
    <Col xs={4}
       sm={4}
       lg={4} className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Start Date</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"> <text style={{'font-weight':'bold'}}> {a.startdate}</text></Col>

</Row>

<Row>
    <Col xs={4}
       sm={4}
       lg={4}  className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>End Date</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}> {a.enddate} </text></Col>

</Row>
{numexp!=false?
<Row>
    <Col xs={4}
       sm={4}
       lg={4}  className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Number of Experiments</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"> <text style={{'font-weight':'bold'}}>{String( numexp.filter(id=>id.projecttitle==a.text).length)}</text></Col>
</Row>
:

<Row>
    <Col xs={4}
       sm={4}
       lg={4}  className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Number of Experiments</text></Col>

<Col xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center"> <text style={{'font-weight':'bold'}}>{String(0)}</text></Col>
</Row>
}<Row>
    <Col xs={4}
       sm={4}
       lg={4} className="d-flex flex-col justify-content-start align-items-center"><text style={{'font-weight':'bold'}}>Description</text></Col>

<Col   xs={8}
       sm={8}
       lg={8} className="d-flex flex-col justify-content-start align-items-center">
<text style={{'font-weight':'bold','word-break':'break-all'}}> {a.description}</text> 
</Col>
</Row>
<br/>
<br/>
</>)
  }) :false}


  
    

  </Container>

)}


const CardExampleHeaderCard2 = () => {
  return(


<>
   {
   TodoList!=false && getexp.length>0 &&numexp!=false? 
   <DatatableWrapper
   body={getexp}
   headers={STORY_HEADERS}
   paginationOptionsProps={{
     initialState: {
       rowsPerPage: 10,
       options: [5, 10, 15, 20]
     }
   }}
 >
   
<Row className="mb-4 p-2">

<Col xs={4}
       sm={4}
       lg={4}       className="d-flex flex-col justify-content-start align-items-center">
       <Filter />
     </Col>

   </Row>

   <Row>
    <Col xs={12}
       sm={6}
       lg={6}
       className="d-flex flex-col justify-content-lg-left align-items-center justify-content-sm-start mb-2 mb-sm-0">
    </Col>
   </Row>

   <Table>
     <TableHeader />
     <TableBody />
   </Table>
   <br/>
<Row className="mb-4 p-2">

<Col        className="d-flex flex-col justify-content-start align-items-center">
<PaginationOptions />
 
   </Col> 
<Col        className="d-flex flex-col justify-content-center align-items-center">

 
<Pagination  />
   </Col> 

   <Col    className="d-flex flex-col justify-content-end align-items-center"     >
   {props.user!=false && getoption!='New' ? 

<Col style={{"display": "flex","justify-content": "end","align-items":"center"}}>  


<Button variant="outline-dark"  size="sm"   onClick={() => ADDoption([true,'New'])} >New Experiment</Button> 



      </Col>

:false}
   </Col> 
   </Row>
  
   <br/>
 </DatatableWrapper>:
 props.user !=false? <>
 <div>There is no Experiment in the project. Select New Experiment and upload it.
 </div>

{props.user!=false && getoption!='New' ? 

<Col style={{"display": "flex","justify-content": "end","align-items":"center"}}>  


<Button variant="outline-dark"  size="sm"   onClick={() => ADDoption([true,'New'])} >New Experiment</Button> 



      </Col>
      

:false}</>



:
 <div> Login is required.</div>
 


 }
  
   
 </>

    


)}






const ADDoption = (e) =>{
  setShow_project(e[0])
  setoption(e[1])
  setProgress(false)
}


  const Example =()=> {
/*{Progress!= false?  <ProgressBarUi data={Progress} />: false}*/
return(<>


<Card style={{ width: '28rem' }}>


  <Card.Body>
  <Form onSubmit={uploadModule } >
    <Card.Title>Upload Experiment</Card.Title>
   

    

     <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Project Name </Form.Label>
    <Form.Control  value={props.ProjectID[0]} />
  </Form.Group>
    <Card.Subtitle className="mb-2 text-muted"> 
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Experiment Name</Form.Label>
    <Form.Control id="ExpID"  placeholder="Experiment Name" />
   
  </Form.Group>
  <Button variant="outline-info" size="sm" onClick={() => 
[setShow3(true),setformid(document.querySelector("#ExpID").value),
setformlabel($('input[name=group1]:checked').val()),
setformfilter($('input[name=group2]:checked').val()),setformfile(document.getElementById('formFileLg').files),setformtxtarea(document.querySelector("#textID").value)
]}>
        what is TMT/LFQ?
      </Button>
      
  <Form.Group>
  <Form.Label>Label information</Form.Label>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="TMT"
        name="group1"
        type={type}
        value="TMT"
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="LFQ" 
        name="group1"
        type={type}
        value="LFQ"
        id={`inline-${type}-2`}
      />
     
    </div>
  ))}
</Form.Group>





<Button variant="outline-info" size="sm" onClick={() => [setShow2(true),setformid(document.querySelector("#ExpID").value),
setformlabel($('input[name=group1]:checked').val()),
setformfilter($('input[name=group2]:checked').val()),setformfile(document.getElementById('formFileLg').files),setformtxtarea(document.querySelector("#textID").value)
]}>
        what is filter row?
      </Button>
<Form.Group>
<Form.Label>Filter row</Form.Label>

  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="NA.omit"
        name="group2"
        value="NAomit"
        type={type}
        id={`inline-${type}-3`}
      />
      <Form.Check
        inline
        label="ALL23" 
        name="group2"
        value="ALL23"
        type={type}
        id={`inline-${type}-4`}
      />
      <Form.Check
        inline
        label="ONE23" 
        value="ONE23"
        name="group2"
        type={type}
        id={`inline-${type}-5`}
      />
    </div>
  ))}
</Form.Group>

    </Card.Subtitle>

    <Card.Text>
     Write Experiment information
    </Card.Text>
  
    <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>proteingroups(txt VERSION)</Form.Label>


    
    <Form.Control type="file" size="lg" name='Filetag'  />

    
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>Experiment Description</Form.Label>
  <Form.Text className="text-muted"  name="profile">

  <Form.Control id="textID" placeholder="Experiment Description" as="textarea" rows={5}  />


    
  </Form.Text> 

  </Form.Group>
  <Button variant="secondary"  type="submit">
    Submit
  </Button> 
   <Button  variant="light"  onClick={()=> ADDoption([false,false])} >
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
</Button>
</Form>

    
  </Card.Body>
</Card>

</>
//<Form.Check type="checkbox" label="Check me out" />
//{testformdata!=false?       <AddData data2={testformdata} />   :false}
    )}

    if (loading) return (<>
      <Container  id='wholeT' >        <Row></Row>
      <div  id='SCAFFOLD3'  >
    <Loader.Audio color="#00BFFF" height={600} width={600}/>
    </div>

    </Container></>)


    return(
    <>

    <Container  id='wholeT' >
    
    <Row > 

    { props.ProjectID[0]!=false?    <Col lg={6} sm={6}  class='Headerstyle' style={{"display": "flex", "align-items":"center","padding":"5px"}} >

    <text style={{'font-weight':'bold', "font-size": "25px" }}> &nbsp;Experiment List&nbsp;     </text>      
    <a  onClick={() => setShow(true)} style={{ 'backgroundColor':'white','border':0,"font-size": "25px"}}>
    <BsQuestionLg id="btncircle"/> 
      </a> 

      </Col>
 :<Col lg={6} sm={6}  class='Headerstyle' style={{"font-size": "25px" , "align-items":"center","padding":"5px"}}>
  
  <text style={{'font-weight':'bold', "font-size": "25px" }}> &nbsp;Experiment List&nbsp;     </text>

  <a  onClick={() => setShow(true)} style={{ 'backgroundColor':'white','border':0,"font-size": "25px"}}>
    <BsQuestionLg id="btncircle"/> 
      </a> 

 </Col> }




      </Row>
      
       
  <Row  > </Row>
      <Row > 
      <Col lg={12} sm={12}  md={12}  style={{"display": "flex", "justify-content": "center","align-items":"center"}}>
               {       (getshow&& getoption=='New'&&props.user != false)==true? <Example /> : false  }
 </Col>
      
     

     
      </Row>
    
      {getshow== false?
    <div  id='SCAFFOLD'  >

   


 <Row >

 <Col>
 <text style={{"font-size": "20px" ,'font-weight':'bold' }}>Project information</text>
 <Divider/>
  <CardExampleHeaderCard/>

</Col>
</Row>
<Row>
<Divider/>

<Col  >
<text style={{"font-size": "20px",'font-weight':'bold' }}>Table</text>
<br/>
<CardExampleHeaderCard2/>
</Col>
</Row>
</div>

:false}

</Container>
<Modal
show={show}
onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Experiment List Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Upload Proteomics data</p> 
        <p>You can upload an experiment by selecting "New Experiment".</p> 
     
      <p>
      The experiment uses "proteingroups.txt", a result file obtained by quantifying mass spectrometry raw data through maxquant.
        </p> 
    
      
      
        </Modal.Body>
      </Modal>
     

      <Modal
show={show2}
onHide={() => setShow2(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          What is filter row
          </Modal.Title>
        </Modal.Header>
       
       

        <Modal.Body>
        <p>        A radio box for handling missing values.     </p>
        <p>        "NA.omit" deletes the row when even 1 null is found in the row.   </p>
        <p>        
"ALL23"
If there is no more than 2/3 of the data for each condition used in the experiment, it will be deleted.   </p>
        <p>        
"ONE23"
If there is more than 2/3 of data in only one condition among all conditions, it passes.    </p>
        <p>        
For ONE23 and ALL23, imput the missing value using missForest, an R package.  </p>

      
        </Modal.Body>
      </Modal>

      
      <Modal
show={show3}
onHide={() => setShow3(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
        
Two types of TMT and LFQ are supported.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>        Please select the method used for the experiment.    </p>
      
      
        </Modal.Body>
      </Modal>
 

    
       </>
      )

}
export default Scaffold3;





/*

 <Modal
 show={show4}
 onHide={() => setShow4(false)}
         dialogClassName="modal-90w"
         aria-labelledby="example-custom-modal-styling-title"
       >
         <Modal.Header closeButton>
           <Modal.Title id="example-custom-modal-styling-title">
           Experiment List Table
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <p> 단백질 실험을 정량화한 output file인 proteingroups.txt를 사용합니다.</p> 
         <p> Label(TMT/LFQ), 	Filter, experiment name,속한 project를 확인 할 수 있습니다. </p>
         <p> Analysis column의 select를 누르면 분석하는 페이지로 이동합니다 </p>  
         
       
         </Modal.Body>
       </Modal>
*/
