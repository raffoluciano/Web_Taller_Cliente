import { getPackage, getPackageByDestiny } from "../../../utils/getdata";
import { setLoading, setPackages } from "./packageSlice";

export const getAllPackages = () => {
    return async( dispatch, getState ) => {

        dispatch(setLoading(true));

        const packages = await getPackage();

        dispatch(setPackages(packages));
    }
}

export const getPackagesByNameDestiny = ( destiny ) => {
    
    return async(dispatch, getState ) => {

        dispatch(setLoading(true));

        const packages = await getPackageByDestiny(destiny);

        dispatch(setPackages(packages));
    }
}