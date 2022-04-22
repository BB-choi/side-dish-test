package com.sidedish.mapper;

import com.sidedish.domain.SideDish;
import com.sidedish.dto.SideDishDto;

public class SideDishMapper {

    public SideDishDto convertToDto(SideDish sideDish) {
        return new SideDishDto(sideDish.getId(), sideDish.getName(),
            sideDish.getDescription(), sideDish.isDawnDeliveryFlag(),
            sideDish.isWholeNationDeliveryFlag(),
            sideDish.getPrice(), sideDish.getDiscountType(),
            sideDish.getDiscountRate(), sideDish.getMainImage());
    }

}