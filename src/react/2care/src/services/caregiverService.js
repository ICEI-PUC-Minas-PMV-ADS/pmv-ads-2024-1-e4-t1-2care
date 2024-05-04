import { API_URL } from './apiService';
import { sendAuthenticatedRequest } from './authService';
import { updateUser } from './userService';

const SERVICE_URL = "/caregiver";

export const updateCaregiver = async (user, caregiver) => { 
    try {
        const responseUserUpdate = await updateUser(user)
        const responseCaregiverUpdate = await sendAuthenticatedRequest(`${API_URL}${SERVICE_URL}/edit/`, "POST", caregiver)
        //retornar fail ou sucess de acordo.
        alert("updated")
        return {'user':responseUserUpdate, 'caregiver':responseCaregiverUpdate};
    } catch (error) {
        alert('Dados inválidos, gentileza verifique o preenchimento!');
        throw new Error(error.message);
    } 
};

export const getCaregiverData = async () => {
    try {
        const response = await sendAuthenticatedRequest(`${API_URL}${SERVICE_URL}`)
        return response;
    } catch (error) {
        return false
    }
};

export const getEvaluationData = async () => {
    try {
        const response = await sendAuthenticatedRequest(`${API_URL}${SERVICE_URL}/ratings`)
        return response;
    } catch (error) {
        return false
    }
};

export const getAllowedToEvaluate = async (caregiverId) => {
    try {
        const response = await sendAuthenticatedRequest(`${API_URL}${SERVICE_URL}/ratings/count`, "POST", caregiverId)
        return response;
    } catch (error) {
        return false
    }
};

export const createEvaluation = async (evaluation) => {
    try {
        const response = await sendAuthenticatedRequest(`${API_URL}${SERVICE_URL}/ratings/`, "POST", evaluation)
        return response;
    } catch (error) {
        return false
    }
};