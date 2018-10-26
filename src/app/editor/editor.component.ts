import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as TuiEditor from 'tui-editor'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  editorForm = this.fb.group({
    title: [null, Validators.required],
  });
  editor: TuiEditor
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.editor = new TuiEditor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '500px',
      language: 'zh_CN',
      exts: [
        'uml',
        {
          name: 'chart',
          minWidth: 100,
          maxWidth: 600,
          minHeight: 100,
          maxHeight: 300
        },
      ],
    });
    this.editor.setMarkdown("```javascript\nconsole.log('xxx');\n```")
  }
  onSubmit() {
    alert('Thanks!' + this.editor.getMarkdown());
  }
}
