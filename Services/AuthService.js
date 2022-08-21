import {getItemFromLocal} from './StorageService'

export default function CheckAuthentication() {
    let token = getItemFromLocal("token");
  
    if (token?.length) {
      return true;
    } else {
      return false;
  
    }
  }
  