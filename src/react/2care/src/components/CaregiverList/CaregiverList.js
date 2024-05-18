import React, { useState, useEffect } from 'react';
import { useSearchParams  } from 'react-router-dom';
import CaregiverCard from '../CaregiverCard/CaregiverCard'
import Grid from '@mui/material/Grid';
import './CaregiverList.css'


const CaregiverList = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [caregiverFilteredList, setCaregiverFilteredList] = React.useState([]);
    const allParams = Object.fromEntries(searchParams.entries());

    useEffect(() => {
        const distanceFilter = (allParams.distance || null)
        const specializationFilter = (allParams.specialization || null)
        const qualificationFilter = (allParams.qualification || null)
        const experienceFilter = (allParams.experience || null)
        const ratingFilter = (allParams.rating || null)
        
        const filteredList = props.caregiverList.filter((e) =>{

            if(distanceFilter && distanceFilter != 0 && Math.ceil(e.distance) > distanceFilter){
                return false;
            }
            if(specializationFilter && !e.specializations.includes(specializationFilter)){
                return false;
            }
            if(qualificationFilter && !e.qualifications.flatMap((q) => q.name).includes(qualificationFilter)){
                return false;
            }
            if(experienceFilter && e.work_exp_years < experienceFilter){
                return false;
            }
            if(e?.evaluations?.length > 0 ){
                e.final_rating = Math.round((e.evaluations.reduce((sum, item) => sum + item.rating, 0) / e.evaluations.length))
            }else{
                e.final_rating = 0
            }
            if(ratingFilter && ratingFilter != 0 && e.final_rating != ratingFilter){
                return false
            }
            
            return true
        })
        setCaregiverFilteredList(filteredList ? filteredList : [])
        
    }, [searchParams, props.caregiverList]); 


    return (
        <div className=''>
            <Grid container justifyContent="start" >
                {caregiverFilteredList.map(caregiver => (
                    <Grid item xs={4} key={caregiver._id}>
                        <div className=''>
                            <CaregiverCard
                                caregiver={caregiver}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CaregiverList