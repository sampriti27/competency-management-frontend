import React from 'react';
import axios from 'axios';

export const getSkillList = async (employee_id) =>{
    const data =await axios.get(`http://localhost:8800/api/v1/skills/${employee_id}`);
    return data;
    }

export const createSkill = async (skill_data) =>{
        const data =await axios.post(`http://localhost:8800/api/v1/skills/`,skill_data);
        return data;
        }
    
export const deleteSkill = async (skill_id) =>{
    const data =await axios.delete(`http://localhost:8800/api/v1/skills/${skill_id}`);
    return data;
    }


    export const updateSkill = async (skill_id,skill_data) =>{
        const data =await axios.put(`http://localhost:8800/api/v1/skills/${skill_id}`,skill_data);
        return data;
        }
       