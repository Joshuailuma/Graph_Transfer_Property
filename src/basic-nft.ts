import {
  Approval as ApprovalEvent,
  // ApprovalForAll as ApprovalForAllEvent,
  PropertyMinted as PropertyMintedEvent,
  Transfer as TransferEvent
} from "../generated/BasicNft/BasicNft"
import {
  Approval,
  // ApprovalForAll,
  PropertyMinted,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleApprovalForAll(event: ApprovalForAllEvent): void {
//   let entity = new ApprovalForAll(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.owner = event.params.owner
//   entity.operator = event.params.operator
//   entity.approved = event.params.approved

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handlePropertyMinted(event: PropertyMintedEvent): void {
  let entity = new PropertyMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.ownerAddress = event.params.ownerAddress
  entity.propertyAddress = event.params.propertyAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
