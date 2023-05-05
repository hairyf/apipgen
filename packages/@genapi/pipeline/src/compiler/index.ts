import type { ApiPipeline } from '@genapi/config'
import { compilerTsRequestDeclaration } from './request'
import { compilerTsTypingsDeclaration } from './typings'

export function compiler(configRead: ApiPipeline.ConfigRead) {
  for (const output of configRead.outputs) {
    if (output.type === 'request')
      output.ast = compilerTsRequestDeclaration(configRead)
    if (output.type === 'typings')
      output.ast = compilerTsTypingsDeclaration(configRead)
  }

  return configRead
}
