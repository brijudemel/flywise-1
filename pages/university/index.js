import React,{useEffect,useState} from "react";
import Navbar from "../../component/common/navbar";
import Footer from "../../component/common/footer";
import Classes from "../../styles/university.module.css";
import { Select,RadioGroup,Stack,Radio,Checkbox,Box } from "@chakra-ui/react";
import SliderThumbWithTooltip from "./Slider";
import Universitycard from "./Universitycard";
import SliderMarkExample from "./Midslider";
import { Country, State, City }  from 'country-state-city';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import axios from "axios";


function Universities() {
  const [GREValue, setGREValue] = React.useState(null)
  const [UndergradTypeValue, setUndergradTypeValue] = React.useState(null)
  const [EnglishTypeValue, setEnglishTypeValue] = React.useState(null)
  const [ApplicationDeadline, setApplicationDeadline] = React.useState(null)
  const [usStates, setusStates] = React.useState([]);
  const [ukStates, setukStates] = React.useState([]);
  const [sidefilter, setsidefilter] = useState(Classes.hideSidebar)
  const [ModalBG, setModalBG] = useState("")
  const [universityDate, setuniversityDate] = useState([])
  useEffect(() => {
    let USAstates = State.getStatesOfCountry('US')
    let UKstates = State.getStatesOfCountry('GB');
    setusStates(USAstates)
    setukStates(UKstates)
    callUniversityData();
  }, [])
  
  const HandleSidebar=()=>{
    if(sidefilter==Classes.hideSidebar){
      setModalBG(Classes.contentBlur);
      setsidefilter(Classes.showSidebar)
    }else{
      setModalBG("");
      setsidefilter(Classes.hideSidebar)

    }
  }

  const callUniversityData =async()=>{
    try {
      const call1 = await axios.get("https://flywise-admin.herokuapp.com/api/allUni");
      console.log(call1);
      setuniversityDate(call1.data.allUni)
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <>
      <Navbar />
      <section className={Classes.universitymain}>
        <div id={sidefilter} className={Classes.universitysidefilter}>
        
        <Accordion  allowMultiple>
          <AccordionItem >
            <h2>
              <AccordionButton _expanded={{ bg: '#4080D3', color: 'white' }} >
                <Box flex='1' textAlign='left'>
                  Country
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {/* single accordian */}
                       {/* usa */}
                       <Accordion  allowMultiple>
                          <AccordionItem >
                          <h2>
                            <AccordionButton   >
                              <Box flex='1' textAlign='left'>
                               United States Of America
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel display='flex' height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>
                          
                           <Checkbox spacing='1.2rem' marginBottom="5px" >Alabama</Checkbox>
                          {
                            usStates.map((state)=>{
                              return (
                                <Checkbox spacing='1.2rem' marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }

                          </AccordionPanel>
                        </AccordionItem>
                       
                       {/* uk */}
                          <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box flex='1' textAlign='left'>
                               United Kingdom
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel display='flex' height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>
                          {
                            ukStates.map((state)=>{
                              return (
                                <Checkbox spacing='1.2rem' marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }       

                          </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: '#4080D3', color: 'white' }}>
                <Box flex='1' textAlign='left'>
                  Discipline
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
             
            </AccordionPanel>
          </AccordionItem>
        </Accordion>



      {/* university fee slider */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>University Fee</h3>
         <h3>USD</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderThumbWithTooltip
              min={1}
              max={100000}
              start={0}
              mid={50000}
              end={100000}
            />
        </div>
      </div>


      {/* Application Fee */}

      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Application Fee</h3>
         <h3>USD</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderThumbWithTooltip
              min={1}
              max={200}
              mid={100}
              start={0}
              end={200}
            />
        </div>
      </div>

      {/* Gre */}

      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Undergrad Education Type</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
        <RadioGroup onChange={setUndergradTypeValue} value={UndergradTypeValue}>
            <Stack direction='column'>
              <Radio cursor="pointer" value='1'>4 Year Degree</Radio>
              <Radio cursor="pointer" value='2'>3 Year Degree</Radio>
            </Stack>
          </RadioGroup>        </div>
      <div className={Classes.universityFeeHead}>
         <h3>GRE Test Scores</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
        <RadioGroup onChange={setGREValue} value={GREValue}>
            <Stack  direction='column'>
              <Radio cursor="pointer" value='1'>Required</Radio>
              <Radio cursor="pointer" value='2'>Optional</Radio>
              <Radio cursor="pointer" value='3'>NON Required</Radio>
            </Stack>
          </RadioGroup>

        </div>
      </div>


    {/* English exam type */}
    <div className={Classes.universityFeeSlider}>
    <div className={Classes.universityFeeHead}>
         <h3>English Exam Type</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
        <RadioGroup onChange={setEnglishTypeValue} value={EnglishTypeValue}>
            <Stack  direction='column'>
              <Radio cursor="pointer" value='1'>IELTS</Radio>
              <Radio cursor="pointer" value='2'>TOEFL</Radio>
              <Radio cursor="pointer" value='3'>PTE</Radio>
              <Radio cursor="pointer" value='4'>DUOLINGO</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>

 {/* WES Transcript Evaluation */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>WES Transcript Evaluation</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample/>
        </div>
      </div>
 
 {/* Unsecured Loan Assistance */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Unsecured Loan Assistance</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample/>
        </div>
      </div>

 
 {/* Job Loan Abroad */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Job Loan Abroad</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample/>
        </div>
      </div>

{/* Application deadline */}
<div className={Classes.universityFeeSlider}>
    <div className={Classes.universityFeeHead}>
         <h3>Application Deadline</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
        <RadioGroup onChange={setApplicationDeadline} value={ApplicationDeadline}>
            <Stack  direction='column'>
              <Radio cursor="pointer" value='1'>Fall</Radio>
              <Radio cursor="pointer" value='2'>Spring</Radio>
              <Radio cursor="pointer" value='3'>Summer</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>


        </div>


        {/* /content start */}
        <div className={Classes.universitycontent} id={ModalBG}>
          <div className={Classes.universitySearchBar}>
            <div className={Classes.universitySearch}>
            <input type="search" placeholder="Search For An Institute"/>

            <button className={Classes.universitySearchIcon} ><FontAwesomeIcon style={{color:"grey",fontSize:"1.2rem"}} icon={faMagnifyingGlass} /></button>
            <button className={Classes.universityFilterIcon} onClick={HandleSidebar} ><FontAwesomeIcon style={{color:"grey",fontSize:"1.2rem"}} icon={faFilter} /></button>
            
            </div>
            <h3>You Found 150 Institute and 2000 Courses</h3>
          </div>
          <div className={Classes.universityCardContainer}>
          {
            universityDate?.map((university,index)=>{
              return <Universitycard 
                    name={university.name}
                    photo={university.photo}
                    country={university.country}
                    state={university.state}
                    id={university._id}
              />
            })
          }

          
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Universities;