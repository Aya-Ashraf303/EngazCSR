import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { Items } from '../../Core/Interfaces/items';
import { SkeletonModule } from 'primeng/skeleton';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [SkeletonModule, RouterLink, RouterLinkActive ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  isSideBarCollapsed = signal<boolean>(false);
  isSubMenuOpened = signal<number | null>(null);
  isSettingsClicked = signal<boolean>(false);
  skelton =Array(12);
  isLoading = signal<boolean>(true);
  
  items = signal<Items[]>([
    {
      label: 'Dashboard',
      icon: 'bi-house',
      routerLink: 'main-component',
    },
    {
      label: 'Leads',
      icon: 'bi-people',
      // routerLink: 'loginnn',

    },
    {
      label: 'Telesales Leads',
      icon: 'bi-person-check',
    },
    {
      label: 'Referrals',
      icon: 'bi-person-plus',
    },
    {
      label: 'Brokers',
      icon: 'bi-person-up',
    },
    {
      label: 'Owners',
      icon: 'bi-person-down',
    },
    {
      label: 'Inventory',
      icon: 'bi-box',
      items: [
        {
          label: 'Projects',
          icon: 'bi-box',
        },
        {
          label: 'Properties',
          icon: 'bi-box',
        },
        {
          label: 'Buyer Requests',
          icon: 'bi-box',
        },
        {
          label: 'Seller Requests',
          icon: 'bi-box',
        },
        {
          label: 'Dev Companies',
          icon: 'bi-box',
        },
      ],
    },
    {
      label: 'Collections',
      icon: 'bi-piggy-bank',
      items: [
        {
          label: 'Contracts',
          icon: 'bi-piggy-bank',
        },
        {
          label: 'Installments',
          icon: 'bi-piggy-bank',
        },
        {
          label: 'Import Contract',
          icon: 'bi-piggy-bank',
        },
      ],
    },
    {
      label: 'Reports',
      icon: 'bi-file-easel',
    },
    {
      label: 'Users',
      icon: 'bi-person-circle',
      items: [],
    },
    {
      label: 'Exports',
      icon: 'bi-cloud-download',
    },
    {
      label: 'Imports',
      icon: 'bi-cloud-upload',
    },
  ]);

  SettingsItems = signal<Items[]>([
    {
      label: 'Form Inputs',
      icon: 'bi-house',
      items: [
        {
          label: 'Lead Inputs',
          icon: 'bi-journal',
        },
        {
          label: 'Unit Inputs',
          icon: 'bi-three-dots',
        },
        {
          label: 'Broker Inputs',
          icon: 'bi-list',
        },
      ],
    },
    {
      label: 'Channels',
      icon: 'bi-chat-left-text',
    },
    {
      label: 'Payment Plan Template ',
      icon: 'bi-file-check',
    },
    {
      label: 'Communicated Way ',
      icon: 'bi-wechat',
    },
    {
      label: 'Stages ',
      icon: 'bi-tag',
    },
    {
      label: 'Land Pages ',
      icon: 'bi-globe',
    },
    {
      label: 'Integration ',
      icon: 'bi-back',
      items: [
        {
          label: 'Facebook ',
          icon: 'bi-facebook',
        },
        {
          label: 'Facebook Logs ',
          icon: 'bi-facebook',
        },
        {
          label: 'More integration ',
          icon: 'bi-puzzle',
        },
        {
          label: 'Webhook Logs ',
          icon: 'bi-file-earmark',
        },
        {
          label: 'UnitIntegration ',
          icon: 'bi-puzzle',
        },
        {
          label: 'LeadIntegration ',
          icon: 'bi-puzzle',
        },
      ],
    },
    {
      label: 'Cancel Reasons ',
      icon: 'bi-x-circle',
    },
    {
      label: 'Configration ',
      icon: 'bi-sliders',
      items: [
        {
          label: 'Company Profile ',
          icon: 'bi-gear',
        },
        {
          label: 'System Settings ',
          icon: 'bi-diagram-3',
        },
        {
          label: 'SMS Settings ',
          icon: 'bi-gear',
        },
        {
          label: 'SMS Templates ',
          icon: 'bi-sliders',
        },
        {
          label: 'Whatsapp Settings ',
          icon: 'bi-whatsapp',
        },
        {
          label: 'Social Media Settings ',
          icon: 'bi-gear',
        },
        {
          label: 'Contact Info Settings ',
          icon: 'bi-gear',
        },
        {
          label: 'Scripting',
          icon: 'bi-code-slash',
        },
        {
          label: 'EOI Settings',
          icon: 'bi-file-earmark',
        },
        {
          label: 'Reservation Settings',
          icon: 'bi-check2-square',
        },
        {
          label: 'Rotation Settings',
          icon: 'bi-arrow-90deg-left',
        },
        {
          label: 'Contracts Settings',
          icon: 'bi-file-check',
        },
        {
          label: 'Reset Unit Configration',
          icon: 'bi-gear',
        },
        {
          label: 'Buyer RequestReset Matching',
          icon: 'bi-gear',
        },
        {
          label: 'Rent Configration',
          icon: 'bi-arrow-90deg-left',
        },
        {
          label: 'Hierarchy Settings',
          icon: 'bi-gear',
        },
      ],
    },
    {
      label: 'System Activity',
      icon: 'bi-activity',
    },
  ]);

  ngOnInit() {
    setTimeout(() => {this.isLoading.set(false)}, 1000);
  }

  toggleSideBar() {
    this.isSideBarCollapsed.set(!this.isSideBarCollapsed());
    this.sidebar.nativeElement.classList.toggle('collapsed');
  }

  toggleSubmenu(index: number) {
    if (this.isSubMenuOpened() === index) this.isSubMenuOpened.set(null);
    else this.isSubMenuOpened.set(index);
  }

  toggleSettings() {
    this.isSettingsClicked.set(!this.isSettingsClicked());
  }
}
