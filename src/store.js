import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        zag:[],  // переменные , данные , состояние 
        teachers:[],
        g40b:[]
    },
    mutations: {
        ...vuexfireMutations,  // мутации изменяют state если происходят action
    },
    actions: {
        bindZag: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('zag', db.collection('zagadki'))
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
            apiKey: "AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",
            authDomain: "rusik-magaz17.firebaseapp.com",
            databaseURL: "https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "rusik-magaz17",
            storageBucket: "rusik-magaz17.appspot.com",
            messagingSenderId: "37682391596",
            appId: "1:37682391596:web:c2fa73eda7beff2eb0ff89"
          });
        },
    }
})


store.dispatch('bindZag')
store.dispatch('bindGL')
store.dispatch('bindTeachers')
