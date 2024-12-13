import { signOut } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { auth } from '../config/firebaseInit.js';
import page from '../lib/page.js';

export default async function(ctx) {
    // TODO: Error handling 
    try{
        await signOut(auth);
        page.redirect('/');
    }catch(err){
        console.log(err.message);
        
    }

}