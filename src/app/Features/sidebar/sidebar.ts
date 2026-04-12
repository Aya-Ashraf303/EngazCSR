import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu, MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenuItem} from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import {   PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [MenuModule, RippleModule, BadgeModule, PanelMenuModule, MenubarModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit{
      items: MenuItem[] | undefined;
  @ViewChild('sidebar') sidebar!: ElementRef;
  isSideBarCollapsed:boolean=false
  isSubMenuOpened : number | null = null;
   ngOnInit() {
        this.items = [
           
            {
                label: 'Dashboard',
                icon:'bi bi-house' ,
               routerLink:"/"
            },
            {
                label: 'Leads',
                icon:'bi bi-people'
            },
            {
                label: 'Owners',
                icon:'bi bi-person-down'
            },
             {
                label: 'Brokers',
                icon:'bi bi-person-up'
            },
            {
                label: 'Inventory',
                icon:'bi bi-box',
                items:[
                  {
                    label:'Projects',
                    icon:'bi bi-box',
                  },
                  {
                    label:'Properties',
                    icon:'bi bi-box',

                  }
                  ,
                  {
                    label:'Buyer Requests',
                     icon:'bi bi-box',

                  },
                  {
                    label:'Seller Requests',
                    icon:'bi bi-box',

                  },
                  {
                    label:'Dev Companies',
                    icon:'bi bi-box',

                  }
                ]
            },
            {
              label:'Collections',
              icon:'bi bi-piggy-bank',
              items:[
                {
                  label:'Contracts',
                  icon:'bi bi-piggy-bank',

                },
                {
                  label:'Installments',
                  icon:'bi bi-piggy-bank',

                },
                {
                  label:'Import Contract',
                  icon:'bi bi-piggy-bank',

                }
              ]
            },
            {
              label:'Reports',
              icon:'bi bi-file-easel'

            },
            {
              label:"More",
              icon:"bi bi-three-dots",
              items:[]

            }
        ];
    }

    toggleSideBar()
    {
       this.isSideBarCollapsed = !this.isSideBarCollapsed; 
      this.sidebar.nativeElement.classList.toggle('collapsed');
    }

    toggleSubmenu(index:number)
    {
      this.isSubMenuOpened = this.isSubMenuOpened === index?null:index
    }
}
