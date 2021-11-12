import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-upxls',
  templateUrl: './upxls.component.html',
  styleUrls: ['./upxls.component.css']
})
export class UpxlsComponent {
  data:Array<[]> = []
  @Output ('elementosExportados') elementosExportados:any = new EventEmitter();

  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      console.log(this.data);

      let x = this.data.slice(1);
      console.log(x);
      this.elementosExportados.emit(x)

    };

    reader.readAsBinaryString(target.files[0]);

  }
  enviarDatosExcel(){
   // this.elementosExportados.emit(reader.onload)

  }
  


}
