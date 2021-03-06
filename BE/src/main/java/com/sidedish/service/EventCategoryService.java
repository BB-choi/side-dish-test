package com.sidedish.service;

import com.sidedish.domain.Event;
import com.sidedish.domain.EventCategory;
import com.sidedish.dto.EventCategoryDto;
import com.sidedish.dto.EventCategoryListDto;
import com.sidedish.repository.EventCategoryRepository;
import com.sidedish.repository.EventRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EventCategoryService {

    private final EventRepository eventRepository;
    private final EventCategoryRepository eventCategoryRepository;

    public EventCategoryListDto getEventCategories() {
        for (Event event : eventRepository.findAll()) {
            if (event.isProgressFlag()) {
                String eventName = event.getName();
                List<EventCategoryDto> eventCategories = eventCategoryRepository.findAllByEventId(event.getId())
                    .stream().map(EventCategory::convertToDto).collect(Collectors.toList());

                return new EventCategoryListDto(eventName, eventCategories);
            }
        }

        return null;
    }

}
