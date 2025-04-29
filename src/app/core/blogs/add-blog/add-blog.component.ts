import { Component, OnDestroy, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-blog',
    templateUrl: './add-blog.component.html',
    styleUrls: ['./add-blog.component.scss'],
    standalone: false
})
export class AddBlogComponent  implements OnInit ,OnDestroy{
  public routes = routes;
  public selectedValue ! : string ;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  selectedList1: data[] = [
    {value: 'Choose Blog Category'},
    {value: 'Health Care'},
    {value: 'Child'},
    {value: 'Safety'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Sub Blog Category'},
    {value: 'Health Care'},
    {value: 'Corona Virus'},
  ];
}
