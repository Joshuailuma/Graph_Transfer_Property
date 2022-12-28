import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ItemSold } from "../generated/TransferProperty/TransferProperty"

export function createItemSoldEvent(
  ownerAddress: Address,
  propertyAddress: Address,
  tokenId: BigInt
): ItemSold {
  let itemSoldEvent = changetype<ItemSold>(newMockEvent())

  itemSoldEvent.parameters = new Array()

  itemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "ownerAddress",
      ethereum.Value.fromAddress(ownerAddress)
    )
  )
  itemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "propertyAddress",
      ethereum.Value.fromAddress(propertyAddress)
    )
  )
  itemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemSoldEvent
}
