import { ItemSold as ItemSoldEvent } from "../generated/TransferProperty/TransferProperty"
import { ItemSold } from "../generated/schema"

export function handleItemSold(event: ItemSoldEvent): void {
  let entity = new ItemSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ownerAddress = event.params.ownerAddress
  entity.propertyAddress = event.params.propertyAddress
  entity.tokenId = event.params.tokenId

  // entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}
