using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avian.Core.BusinessLogic
{
    public class DocumentBusiness
    {        
        private readonly IDocumentRepository DocumentRepository;        
        public DocumentBusiness(IDocumentRepository DocumentRepository)
        {
            this.DocumentRepository = DocumentRepository;
        }
        
        public Abdocument FetchDocument(Abdocument objDocument)
        {            
            try
            {
                if (!String.IsNullOrEmpty(objDocument.DocumentId.ToString()) || objDocument.DocumentId==0)
                {
                    objDocument.DocumentFile = "";
                    ///////////////////////////
                    /*All Guid for Relation*/                    
                    //////////////////////////
                    DocumentRepository.Insert(objDocument);                    
                    DocumentRepository.Commit();
                }
                else
                {
                    DocumentRepository.Update(objDocument);
                    DocumentRepository.Commit();
                } 
                return objDocument;
            }
            catch (Exception ex)
            {
                ex.ToString();
                return null;
            }
        }        
    }
}