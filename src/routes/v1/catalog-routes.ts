import { type Request, type Response } from 'express'
import { Catalog } from '../../controllers/catalog'
import { getErrorMessage } from '../../utils/errors'
import { type Product} from '../../viewModels/product'

function sendErrorMessage(error: string, response: Response, message='Internal Server Error'): void {
    response.status(500).json({ message: error})
}

export function getProducts (request: Request, response: Response): void {
    const catalog = new Catalog()
    catalog.getAllProducts().then(res => {
      response.status(res.statusCode)
      .json(res.response)
    })
    .catch( error => {
      sendErrorMessage(getErrorMessage(error), response)
    })
}

export function addProduct (request: Request, response: Response): void {
  try {
    const newData: Product = request.body
    const catalog = new Catalog()
    catalog.addProduct(newData).then( res => {
      response
      .status(res.statusCode)
      .json(res.response)
    })
    .catch( error => {
      sendErrorMessage(getErrorMessage(error), response)
    })
  } catch (error) {
    sendErrorMessage(getErrorMessage(error), response)
  }
    
}
