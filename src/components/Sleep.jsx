import { useState,useEffect } from 'react'
import  Axios from 'axios'

const Sleep=()=>{
    
    const [Age,setAge]=useState("")
    const [Gender,setGender]=useState("")
    const [Occupation,setOccupation]=useState("")
    const [SleepDuration,setSleepDueration]=useState("")
    const [QualityOfSleep,setQualityOfSleep]=useState("")
    const [StressLevel,setStressLevel]=useState("")
    const [BMICatagory,setBMICatagory]=useState("")
    const [HeartRate,setHeartRate]=useState("")
    const [DailySteps,setDailySteps]=useState("")
    const [Bloodpressure,setBloodpressure]=useState("")
    const [PhysicalActivity,setPhysicalActivity]=useState("")
    const [Output,setOutput]=useState("")

    const handileGender=(e)=>{
        setGender(e.target.value)
    }
    const handileHeartRate=(e)=>{
        setHeartRate(e.target.value)
    }
    const handileAge=(e)=>{
        setAge(e.target.value)
    }

    const handilOccupation=(e)=>{
        setOccupation(e.target.value)
    }

    const handileSleepDueration=(e)=>{
        setSleepDueration(e.target.value)
    }
    const handileQualityOfSleep=(e)=>{
        setQualityOfSleep(e.target.value)
    }
    const handileStressLevel=(e)=>{
        setStressLevel(e.target.value)
    }
    const handileBMICatagory=(e)=>{
        setBMICatagory(e.target.value)
    }
    const handileDailySteps=(e)=>{
        setDailySteps(e.target.value)
    }
    const handileBloodpressure=(e)=>{
        setBloodpressure(e.target.value)
    }

    const handilePhysicalActivity=(e)=>{
        setPhysicalActivity(e.target.value)
    }
    
    
    
   
    const handileSubmit=(e)=>{
        e.preventDefault()
        if(BMICatagory.toUpperCase()=="OVER WEIGHT")
            setBMICatagory(3)
        else if(BMICatagory.toUpperCase()=="NORMAL")
            setBMICatagory(0)
        else if(BMICatagory.toUpperCase()=="OBESE")
            setBMICatagory(2)
        else if(BMICatagory.toUpperCase()=="NORMAL WEIGHT")
            setBMICatagory(1)
        else 
            setBMICatagory(0)
    if(Occupation.toUpperCase()==="SOFTWARE ENGINEER")
        setOccupation(9)
    else if(Occupation.toUpperCase()==="DOCTOR")
        setOccupation(1)
    else if(Occupation.toUpperCase()==="SALES REPRESENTATIVE")
        setOccupation(6)
    else if(Occupation.toUpperCase()==="TEACHER")
        setOccupation(10)
    else if(Occupation.toUpperCase()==="NURSE")
        setOccupation(5)
    else if(Occupation.toUpperCase()==="ENGINEERE")
        setOccupation(2)
    else if(Occupation.toUpperCase()==="ACCOUTANT")
        setOccupation(0)
    else if(Occupation.toUpperCase()==="SCIENTEST")
        setOccupation(8)
    else if(Occupation.toUpperCase()==="LAWER")
        setOccupation(3)
    else if(Occupation.toUpperCase()==="SALSE PERSON")
        setOccupation(7)
    else if(Occupation.toUpperCase()==="MANAGER")
        setOccupation(4)
    else
        setOccupation(4)
       const gender=(Gender.toUpperCase==="MALE")?0:1;
        
        console.log("Age:", Age)
        console.log("Gender:",Gender)
        console.log("Occupation:", Occupation)
        console.log("Sleep dueration:", SleepDuration)
        console.log("Quality of sleep :",QualityOfSleep)
        console.log("Daily steps :",DailySteps)
        console.log("Heart Rate :",HeartRate)
        console.log("BMI Catagory :",BMICatagory)
        console.log("Stress Level :",StressLevel)
        console.log("PhysicalActivity :",PhysicalActivity)
        const bp=Bloodpressure.split("/");
        const Systolic=bp[0]
        const Diastolic=bp[1]
        Axios.post("http://127.0.0.1:5000/sleep",{Age,gender,Occupation,SleepDuration,QualityOfSleep,PhysicalActivity,StressLevel,BMICatagory,HeartRate,DailySteps,Systolic,Diastolic})
        .then((req,res)=>{console.log(req)
            console.log("json")
            setOutput(req.data.result);
            console.log(req.data.result)})
        .catch(e=>console.log(e))
        console.log()
        setAge("")
        setOccupation("")
        setGender("")
        setSleepDueration("")
        setQualityOfSleep("")
        setBloodpressure("")
        setDailySteps("")
        setHeartRate("")
        setBMICatagory("")
        setStressLevel("")
        setPhysicalActivity("")
    }
    
    return(<>
        <div class="contact__container bd-grid">
                <h2 class="section-title">Contact</h2>
                    <input  value={Gender} onChange={handileGender} id="Gender" placeholder='Gender' />
                    <input  value={Age} onChange={handileAge} id="Age" placeholder='Age' />
                    <input  value={Occupation} onChange={handilOccupation} id="occupation" placeholder='Occupation ' />
                    <input  value={SleepDuration} onChange={handileSleepDueration} id="Sleep dueration" placeholder='Sleep Duration' />
                    <input  value={QualityOfSleep} onChange={handileQualityOfSleep} id="Quality Of Sleep" placeholder='Quality of sleep' />
                    <input  value={PhysicalActivity} onChange={handilePhysicalActivity} id="physical activiyt" placeholder="Physical Activity" type="text" />
                    <input  value={StressLevel} onChange={handileStressLevel} id="Stress Leve" placeholder='Stress Leve' />
                    <input  value={BMICatagory} onChange={handileBMICatagory}id="BMI Category" placeholder='BMI Category' />
                    <input  value={HeartRate} onChange={handileHeartRate}id="Heart Rate" placeholder='Heart Rate' />
                    <input  value={DailySteps} onChange={handileDailySteps}id="Daily Steps" placeholder='Daily Steps'/>
                    <input  value={Bloodpressure} onChange={handileBloodpressure}id="Blood Pressure" placeholder='Blood Pressure'/>
                    <div class="resbtn">
                        <button type="submit" class="button" target="_blank"  onClick={handileSubmit}><a href="https://64db6e4cc7a4065b965277e6--lambent-kelpie-93ff5a.netlify.app">Submit</a></button>
                    </div>
                    <p>{Output}</p>
        </div>
    </>)
}
export default Sleep    