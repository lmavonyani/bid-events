//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
    templateUrl: 'post-detail.html'
})
export class PostDetail {
    selectedItem: any;

    constructor(private nav: NavController, navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }

}
/**
 * Generated class for the PostDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
