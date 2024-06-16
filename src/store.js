import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        docs:[]
    },
    mutations: {
        ...vuexfireMutations,  // мутации изменяют state если происходят action
    },
    actions: {
        bindDocs: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('docs', db.collection('docs'))
        }), // 
        bindGL: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('g40b', db.collection('g40b'))
        }), // 
        bindTeachers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('teachers', db.collection('teachers'))
        }), // 

        addUser: firestoreAction((context, payload) => {
            return db.collection('g40b').add(payload)
        }),
        saveR: firestoreAction((context, payload) => {
            return db.collection('rezult_zagadki').add(payload)
        }),
        delUser: firestoreAction((context, payload) => {
            db.collection('g40b')
                .doc(payload)
                .delete()
        }),
        updateG: firestoreAction((context, {id, doc}) => {
            db.collection('g40b')
                .doc(id)
                .update(doc)
        }),

       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDMw7C8WKCoVqjqS5e6p0mIjz2UICoFyjI",
  authDomain: "test-28615.firebaseapp.com",
  databaseURL: "https://test-28615-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-28615",
  storageBucket: "test-28615.appspot.com",
  messagingSenderId: "676847738734",
  appId: "1:676847738734:web:765c843fc9a7ab522fab7f",
  measurementId: "G-19H5CTK0MB"
          });
        },
    }
})


store.dispatch('bindDocs')
store.dispatch('bindGL')
store.dispatch('bindTeachers')
